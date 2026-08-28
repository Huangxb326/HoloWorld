'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { siteAsset } from './sitePath';

type NavTone = 'transparent' | 'light' | 'blue';

export default function SiteNav() {
  const [tone, setTone] = useState<NavTone>('transparent');

  useEffect(() => {
    const updateTone = () => {
      const probeY = 18;
      const surfaces = Array.from(
        document.querySelectorAll<HTMLElement>('[data-nav-tone]'),
      );
      const active = surfaces.find((surface) => {
        const rect = surface.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom > probeY;
      });
      const nextTone = active?.dataset.navTone as NavTone | undefined;
      setTone(nextTone ?? 'light');
    };

    updateTone();
    window.addEventListener('scroll', updateTone, { passive: true });
    window.addEventListener('resize', updateTone);
    return () => {
      window.removeEventListener('scroll', updateTone);
      window.removeEventListener('resize', updateTone);
    };
  }, []);

  return (
    <nav className={`site-nav nav-${tone}`} aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="HoloWorld home">
        <Image
          className="nav-brand-icon"
          src={siteAsset('/images/brand/holoworld-icon-final.png')}
          alt=""
          width={3396}
          height={857}
          priority
        />
      </a>
      <a
        className="paper-link"
        href="https://arxiv.org/abs/2608.05879"
        target="_blank"
        rel="noreferrer"
        aria-label="Read the paper"
        title="Read the paper"
      >
        <span className="paper-icon" aria-hidden="true"><span /></span>
      </a>
    </nav>
  );
}
