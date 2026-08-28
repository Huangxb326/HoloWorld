'use client';

import { useState } from 'react';

const citation = `@article{huang2026holoworld,
  title={To See a World in a Living Context: Unified Indoor-Outdoor Urban World Generation},
  author={Huang, Xiaobin and Huang, Zilong and Luo, Yang and Fan, Hongchao and Chen, Yiping and Han, Ting},
  journal={arXiv preprint arXiv:2608.05879},
  year={2026}
}`;

export default function CopyCitation() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="citation-card">
      <pre>{citation}</pre>
      <button type="button" onClick={copy} aria-live="polite">
        {copied ? 'Copied' : 'Copy BibTeX'}
      </button>
    </div>
  );
}
