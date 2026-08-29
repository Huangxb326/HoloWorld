import Image from 'next/image';
import CopyCitation from './CopyCitation';
import SiteNav from './SiteNav';
import { siteAsset } from './sitePath';

const authors = [
  { name: 'Xiaobin Huang', affiliation: '1', marker: '*' },
  { name: 'Zilong Huang', affiliation: '1', marker: '*' },
  { name: 'Yang Luo', affiliation: '1' },
  { name: 'Hongchao Fan', affiliation: '2' },
  { name: 'Yiping Chen', affiliation: '1', marker: '†' },
  { name: 'Ting Han', affiliation: '1', marker: '†' },
];

const contextLevels = [
  {
    title: 'World',
    description: 'Global identity, urban semantics, shared visual language.',
  },
  {
    title: 'Block',
    description: 'Local organization conditioned on surrounding city regions.',
  },
  {
    title: 'Building',
    description: 'A grounded instance with function, appearance, and footprint.',
  },
  {
    title: 'Interior',
    description: 'A corresponding space that belongs to its exterior building.',
  },
];

const gallery = [
  {
    name: 'Minecraft City',
    theme: 'minecraft',
    overview: siteAsset('/images/worlds/minecraft/overview.png'),
    details: [siteAsset('/images/worlds/minecraft/detail-1.png'), siteAsset('/images/worlds/minecraft/detail-2.png')],
    interiors: [siteAsset('/images/worlds/minecraft/interior-dollhouse.png'), siteAsset('/images/worlds/minecraft/interior-view.png')],
    demo: 'https://huangxb326.github.io/holoworld-demo-explorer/?case=minecraft',
  },
  {
    name: 'Cyberpunk City',
    theme: 'cyberpunk',
    overview: siteAsset('/images/worlds/cyberpunk/overview.png'),
    details: [siteAsset('/images/worlds/cyberpunk/detail-1.png'), siteAsset('/images/worlds/cyberpunk/detail-2.png')],
    interiors: [siteAsset('/images/worlds/cyberpunk/interior-dollhouse.png'), siteAsset('/images/worlds/cyberpunk/interior-view.png')],
    demo: 'https://huangxb326.github.io/holoworld-demo-explorer/?case=cyberpunk',
  },
  {
    name: 'European Old Town',
    theme: 'european',
    overview: siteAsset('/images/worlds/european/overview.png'),
    details: [siteAsset('/images/worlds/european/detail-1.png'), siteAsset('/images/worlds/european/detail-2.png')],
    interiors: [siteAsset('/images/worlds/european/interior-dollhouse.png'), siteAsset('/images/worlds/european/interior-view.png')],
  },
  {
    name: 'Ghibli City',
    theme: 'ghibli',
    overview: siteAsset('/images/worlds/ghibli/overview.png'),
    details: [siteAsset('/images/worlds/ghibli/detail-1.png'), siteAsset('/images/worlds/ghibli/detail-2.png')],
    interiors: [siteAsset('/images/worlds/ghibli/interior-dollhouse.png'), siteAsset('/images/worlds/ghibli/interior-view.png')],
  },
  {
    name: 'High-Density Modern City',
    theme: 'high-density',
    overview: siteAsset('/images/worlds/high-density/overview.png'),
    details: [siteAsset('/images/worlds/high-density/detail-1.png'), siteAsset('/images/worlds/high-density/detail-2.png')],
    interiors: [siteAsset('/images/worlds/high-density/interior-dollhouse.png'), siteAsset('/images/worlds/high-density/interior-view.png')],
  },
  {
    name: 'Candy-Pop Toy City',
    theme: 'candy',
    overview: siteAsset('/images/worlds/candy/overview.png'),
    details: [siteAsset('/images/worlds/candy/detail-1.png'), siteAsset('/images/worlds/candy/detail-2.png')],
    interiors: [siteAsset('/images/worlds/candy/interior-dollhouse.png'), siteAsset('/images/worlds/candy/interior-view.png')],
  },
  {
    name: 'Modern City',
    theme: 'modern',
    overview: siteAsset('/images/worlds/modern/overview.png'),
    details: [siteAsset('/images/worlds/modern/detail-1.png'), siteAsset('/images/worlds/modern/detail-2.png')],
    interiors: [siteAsset('/images/worlds/modern/interior-dollhouse.png'), siteAsset('/images/worlds/modern/interior-view.png')],
  },
  {
    name: 'Oceanic Civilization',
    theme: 'oceanic',
    overview: siteAsset('/images/worlds/oceanic/overview.png'),
    details: [siteAsset('/images/worlds/oceanic/detail-1.png'), siteAsset('/images/worlds/oceanic/detail-2.png')],
    interiors: [siteAsset('/images/worlds/oceanic/interior-dollhouse.png'), siteAsset('/images/worlds/oceanic/interior-view.png')],
  },
];

const coverOrder = ['modern', 'minecraft', 'european', 'oceanic', 'candy', 'cyberpunk'];
const coverGallery = coverOrder.map(
  (theme) => gallery.find((world) => world.theme === theme)!,
);

export default function Home() {
  return (
    <main>
      <SiteNav />

      <section className="hero" id="top" data-nav-tone="transparent" data-cover="scroll">
        <div className="hero-worlds" aria-hidden="true">
          {coverGallery.map((world, index) => (
            <div className="hero-world" key={world.name}>
              <Image
                src={world.overview}
                alt=""
                fill
                priority={index < 4}
                sizes="16.67vw"
              />
            </div>
          ))}
        </div>
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            To See a World in a Living Context:
            <span>Unified Indoor-Outdoor Urban World Generation</span>
          </h1>

          <div className="author-block">
            <div className="authors">
              {authors.map((author) => (
                <span key={author.name}>
                  {author.name}<sup>{author.affiliation}{author.marker ? `,${author.marker}` : ''}</sup>
                </span>
              ))}
            </div>
            <div className="affiliations">
              <p><sup>1</sup> Sun Yat-sen University</p>
              <p><sup>2</sup> Norwegian University of Science and Technology</p>
            </div>
            <div className="contribution-note" aria-label="Author contribution notes">
              <span>* Equal Contribution</span>
              <span>† Corresponding authors</span>
            </div>
            <div className="hero-actions">
              <a
                className="hero-paper-button"
                href="https://arxiv.org/abs/2608.05879"
                target="_blank"
                rel="noreferrer"
                aria-label="Read HoloWorld on arXiv"
              >
                <span className="hero-paper-doc" aria-hidden="true"><span /></span>
                <span>ArXiv</span>
              </a>
              <a
                className="hero-paper-button hero-demo-button"
                href="https://huangxb326.github.io/holoworld-demo-explorer/?case=dual"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the interactive HoloWorld demo"
              >
                <span className="hero-demo-icon" aria-hidden="true" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="abstract-section" id="abstract" data-nav-tone="light">
        <div className="abstract-title">
          <h2>Abstract</h2>
        </div>
        <div className="abstract-card">
          <div className="abstract-copy">
            <p>
              Text-driven 3D generation has advanced rapidly in creating large-scale outdoor environments and detailed indoor scenes, but these domains are usually synthesized independently, lacking the correspondence required for a coherent urban world. We present <strong className="brand-highlight">HoloWorld</strong>, a unified indoor-outdoor urban world generation framework built on a continuously updated cross-scale world context.
            </p>
            <p>
              Initializing from a user description, HoloWorld progressively represents and updates the diverse world information, from city-scale planning to individual buildings, allowing generated interiors to maintain explicit correspondence with their associated exterior buildings. Conditioned on the evolving context and previously generated neighboring blocks, HoloWorld autoregressively generates urban exteriors with consistent spatial organization and visual identity across blocks. The generated exterior representations are further grounded in 3D building instances and footprints, enabling building-specific indoor generation with geometry-constrained layouts and inherited appearance characteristics.
            </p>
            <p>
              To our knowledge, <strong className="abstract-claim">HoloWorld is the first framework to unify indoor and outdoor generation within a coherent 3D urban world.</strong> Extensive experiments demonstrate that HoloWorld achieves superior urban exterior generation performance, improving the average AQS score over the SOTA by 7.68% and obtaining the highest average RDR score, while maintaining strong building-level indoor-outdoor correspondence and cross-block continuity within a unified 3D urban world.
            </p>
          </div>
          <figure className="teaser-frame">
            <Image
              src={siteAsset('/images/teaser.png')}
              alt="HoloWorld compared with methods that generate indoor and outdoor scenes separately"
              width={2200}
              height={752}
              sizes="(max-width: 900px) 96vw, 70vw"
            />
            <figcaption className="paper-figure-caption">
              <strong className="figure-number">Figure 1:</strong> Existing methods generate indoor and outdoor scenes separately. HoloWorld instead propagates a cross-scale world context from the urban world through its blocks to individual buildings, establishing explicit building–interior correspondence and preserving semantic, visual, and spatial coherence.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="method-section" id="method" data-nav-tone="blue">
        <div className="method-title">
          <h2>Method</h2>
        </div>

        <div className="context-flow">
          {contextLevels.map((level, index) => (
            <article className="context-card" key={level.title}>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
              {index < contextLevels.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
            </article>
          ))}
        </div>

        <figure className="pipeline-frame">
          <Image
            src={siteAsset('/images/pipeline.png')}
            alt="Overview of the HoloWorld generation pipeline"
            width={2200}
            height={953}
            sizes="94vw"
          />
          <figcaption className="paper-figure-caption pipeline-caption">
            <strong className="figure-number">Figure 2:</strong> <strong className="figure-name">Overview of HoloWorld.</strong> (a) An evolving cross-scale world context organizes validated information at world, block, and building levels. (b) Context-driven outdoor generation and instance grounding localize this context to individual buildings, where it guides building-specific indoor synthesis under appearance, asset, and footprint constraints. (c) The resulting city, blocks, and interiors form explicitly corresponding parts of a unified 3D urban world.
          </figcaption>
        </figure>
      </section>

      <section className="results-section" id="results" data-nav-tone="blue">
        <div className="results-title">
          <h2>Results</h2>
        </div>

        <div className="results-figures">
          <figure className="result-figure">
            <Image src={siteAsset('/images/comparison.png')} alt="Qualitative comparison between HoloWorld and prior city generation methods" width={2200} height={1309} sizes="(max-width: 900px) 100vw, 50vw" />
            <figcaption className="paper-figure-caption result-caption">
              <strong className="figure-number">Figure 3:</strong> <strong className="figure-name">Qualitative comparison under identical urban descriptions, with two views per scene.</strong> HoloWorld generates richer architectural and landscape details while preserving more coherent spatial organization and visual style across the city.
            </figcaption>
          </figure>

          <figure className="result-figure">
            <Image src={siteAsset('/images/ablation.png')} alt="HoloWorld living-context and autoregressive-neighborhood ablation results" width={2200} height={1190} sizes="(max-width: 900px) 100vw, 50vw" />
            <figcaption className="paper-figure-caption result-caption">
              <strong className="figure-number">Figure 4:</strong> <strong className="figure-name">Qualitative results and ablations of HoloWorld.</strong> (A) The full model generates an interior that remains functionally, visually, and spatially consistent with its corresponding exterior building, whereas a static world context weakens this correspondence. (B) Autoregressive neighborhood conditioning preserves cross-block spatial and visual continuity; removing it introduces visible boundary discontinuities highlighted by the red boxes.
            </figcaption>
          </figure>
        </div>

        <div className="table-stack">
          <div className="table-card table-card-1">
            <div className="table-title">
              <p className="paper-table-caption"><strong className="table-number">Table 1:</strong> <strong className="table-name">Quantitative comparison of urban exterior generation.</strong> All methods receive identical urban descriptions as inputs. GPT-5.5-based and human evaluations are reported separately. The best results are in bold.</p>
            </div>
            <div className="table-scroll">
              <table>
                <caption>Table 1: Quantitative comparison of urban exterior generation. All methods receive identical urban descriptions as inputs. GPT-5.5-based and human evaluations are reported separately. The best results are in bold.</caption>
                <thead>
                  <tr><th rowSpan={3}>Method</th><th colSpan={8}>AQS</th><th colSpan={8}>RDR</th></tr>
                  <tr><th colSpan={2}>SVC↑</th><th colSpan={2}>SRC↑</th><th colSpan={2}>MTF↑</th><th colSpan={2}>LA↑</th><th colSpan={2}>SVC↑</th><th colSpan={2}>SRC↑</th><th colSpan={2}>MTF↑</th><th colSpan={2}>LA↑</th></tr>
                  <tr><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th></tr>
                </thead>
                <tbody>
                  <tr><th>CityCraft</th><td>7.11</td><td>7.17</td><td>7.22</td><td>6.00</td><td>4.89</td><td>5.00</td><td>5.89</td><td>5.00</td><td>23.65</td><td>19.21</td><td>20.76</td><td>19.61</td><td>19.90</td><td>14.99</td><td>17.35</td><td>15.97</td></tr>
                  <tr><th>SynCity</th><td>7.70</td><td>7.17</td><td>8.20</td><td>7.83</td><td>4.90</td><td>6.33</td><td>5.30</td><td>6.50</td><td>21.95</td><td>18.27</td><td>25.69</td><td>21.72</td><td>16.97</td><td>15.12</td><td>14.91</td><td>12.00</td></tr>
                  <tr><th>MajutsuCity</th><td>8.00</td><td>7.83</td><td>8.60</td><td>8.00</td><td>7.00</td><td>7.50</td><td>7.40</td><td>7.83</td><td>22.62</td><td>20.99</td><td>24.99</td><td>19.91</td><td>23.89</td><td>20.52</td><td>25.84</td><td>22.70</td></tr>
                  <tr className="ours-row"><th>Ours</th><td><strong>8.75</strong></td><td><strong>8.67</strong></td><td><strong>9.00</strong></td><td><strong>8.50</strong></td><td><strong>7.63</strong></td><td><strong>8.00</strong></td><td><strong>8.00</strong></td><td><strong>8.67</strong></td><td><strong>27.89</strong></td><td><strong>23.83</strong></td><td><strong>27.64</strong></td><td><strong>24.65</strong></td><td><strong>29.43</strong></td><td><strong>24.11</strong></td><td><strong>29.57</strong></td><td><strong>25.89</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-card table-card-2">
            <div className="table-title">
              <p className="paper-table-caption"><strong className="table-number">Table 2:</strong> <strong className="table-name">Quantitative evaluation of building-level indoor–outdoor correspondence using GPT-5.5 and human evaluation.</strong> The best results are in bold. Dashes denote metrics unavailable for TRELLIS because its independently generated interior is not grounded in the exterior building footprint.</p>
            </div>
            <div className="table-scroll">
              <table>
                <caption>Table 2: Quantitative evaluation of building-level indoor-outdoor correspondence using GPT-5.5 and human evaluation. The best results are in bold. Dashes denote metrics unavailable for TRELLIS because its independently generated interior is not grounded in the exterior building footprint.</caption>
                <thead>
                  <tr><th rowSpan={3}>Method</th><th colSpan={8}>AQS</th><th colSpan={4}>RDR</th><th rowSpan={3}>Shape IoU↑</th></tr>
                  <tr><th colSpan={2}>Functional↑</th><th colSpan={2}>Visual↑</th><th colSpan={2}>Spatial↑</th><th colSpan={2}>Average↑</th><th colSpan={2}>Functional↑</th><th colSpan={2}>Visual↑</th></tr>
                  <tr><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th></tr>
                </thead>
                <tbody>
                  <tr><th>TRELLIS</th><td>6.23</td><td>6.30</td><td>5.88</td><td>4.85</td><td>—</td><td>—</td><td>—</td><td>—</td><td>19.17</td><td>20.03</td><td>1.83</td><td>10.90</td><td>—</td></tr>
                  <tr className="ours-row"><th>Ours</th><td><strong>7.47</strong></td><td><strong>7.45</strong></td><td><strong>8.21</strong></td><td><strong>7.60</strong></td><td><strong>8.77</strong></td><td><strong>8.65</strong></td><td><strong>8.15</strong></td><td><strong>7.90</strong></td><td><strong>22.35</strong></td><td><strong>20.36</strong></td><td><strong>24.29</strong></td><td><strong>23.51</strong></td><td><strong>0.997</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-card table-card-3">
            <div className="table-title">
              <p className="paper-table-caption"><strong className="table-number">Table 3:</strong> <strong className="table-name">Effect of dynamic world-context localization on building-level indoor–outdoor correspondence under GPT-5.5 and human evaluation.</strong> The best results are in bold.</p>
            </div>
            <div className="table-scroll">
              <table>
                <caption>Table 3: Effect of dynamic world-context localization on building-level indoor-outdoor correspondence under GPT-5.5 and human evaluation. The best results are in bold.</caption>
                <thead>
                  <tr><th rowSpan={3}>Configuration</th><th colSpan={8}>AQS</th><th colSpan={6}>RDR</th><th rowSpan={3}>Shape IoU↑</th></tr>
                  <tr><th colSpan={2}>Functional↑</th><th colSpan={2}>Visual↑</th><th colSpan={2}>Spatial↑</th><th colSpan={2}>Average↑</th><th colSpan={2}>Functional↑</th><th colSpan={2}>Visual↑</th><th colSpan={2}>Spatial↑</th></tr>
                  <tr><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th></tr>
                </thead>
                <tbody>
                  <tr><th>Static World Context</th><td>5.75</td><td>5.88</td><td>4.58</td><td>6.00</td><td>3.25</td><td>4.75</td><td>4.53</td><td>5.54</td><td>16.37</td><td>11.75</td><td>1.40</td><td>0.33</td><td>1.40</td><td>11.09</td><td>0.670</td></tr>
                  <tr className="ours-row"><th>Full Model</th><td><strong>7.67</strong></td><td><strong>7.88</strong></td><td><strong>8.17</strong></td><td><strong>8.25</strong></td><td><strong>7.75</strong></td><td><strong>8.50</strong></td><td><strong>7.86</strong></td><td><strong>8.21</strong></td><td><strong>21.82</strong></td><td><strong>18.86</strong></td><td><strong>22.85</strong></td><td><strong>18.82</strong></td><td><strong>22.85</strong></td><td><strong>17.50</strong></td><td><strong>0.994</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-card table-card-4">
            <div className="table-title">
              <p className="paper-table-caption"><strong className="table-number">Table 4:</strong> <strong className="table-name">Effect of autoregressive neighborhood conditioning (ANC) on cross-block visual and spatial continuity under GPT-5.5 and human evaluation.</strong> The best results are in bold.</p>
            </div>
            <div className="table-scroll">
              <table>
                <caption>Table 4: Effect of autoregressive neighborhood conditioning (ANC) on cross-block visual and spatial continuity under GPT-5.5 and human evaluation. The best results are in bold.</caption>
                <thead>
                  <tr><th rowSpan={2}>Configuration</th><th colSpan={2}>Continuity AQS↑</th><th colSpan={2}>RDR↑</th></tr>
                  <tr><th>GPT</th><th>Hum.</th><th>GPT</th><th>Hum.</th></tr>
                </thead>
                <tbody>
                  <tr className="ours-row"><th>Full Model</th><td><strong>8.25</strong></td><td><strong>7.75</strong></td><td><strong>24.04</strong></td><td><strong>21.97</strong></td></tr>
                  <tr><th>w/o ANC</th><td>7.25</td><td>5.38</td><td>16.66</td><td>19.07</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>

      <section className="worlds-section" id="worlds" data-nav-tone="light">
        <div className="worlds-title">
          <h2>Generated Worlds</h2>
        </div>

        <div className="world-grid">
          {gallery.map((world, index) => (
            <article className={`world-showcase world-${world.theme}`} key={world.name}>
              <figure className="world-overview">
                <h3 className="world-name-label">{world.name}</h3>
                {world.demo && (
                  <a
                    className="world-demo-link"
                    href={world.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open the interactive ${world.name} demo`}
                  >
                    Demo
                  </a>
                )}
                <Image
                  src={world.overview}
                  alt={`Complete ${world.name} generated by HoloWorld`}
                  fill
                  sizes="(max-width: 1100px) 70vw, 34vw"
                />
                <figcaption>
                  <span>0{index + 1} / 08</span>
                  <small>FULL CITY OVERVIEW</small>
                </figcaption>
              </figure>

              <div className="world-details" aria-label={`${world.name} exterior and interior rendered views`}>
                <div className="world-detail-column world-local-views">
                  {world.details.map((detail, detailIndex) => (
                    <figure key={detail}>
                      <Image
                        src={detail}
                        alt={`${world.name} local exterior rendered view ${detailIndex + 1}`}
                        fill
                        sizes="(max-width: 700px) 44vw, (max-width: 1100px) 24vw, 10vw"
                      />
                      <figcaption>LOCAL VIEW · 0{detailIndex + 1}</figcaption>
                    </figure>
                  ))}
                </div>

                <div className="world-detail-column world-interior-views">
                  {world.interiors.map((interior, interiorIndex) => (
                    <figure className={interiorIndex === 0 ? 'world-dollhouse' : 'world-interior-render'} key={interior}>
                      <Image
                        src={interior}
                        alt={interiorIndex === 0
                          ? `${world.name} interior dollhouse view`
                          : `${world.name} interior walkthrough view`}
                        fill
                        sizes="(max-width: 700px) 44vw, (max-width: 1100px) 24vw, 10vw"
                      />
                      <figcaption>{interiorIndex === 0 ? 'INTERIOR OVERVIEW' : 'INTERIOR VIEW'}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="world-demo-note">Click the <strong>“Demo”</strong> button to explore the interactive HoloWorld demo.</p>
      </section>

      <section className="citation-section" aria-labelledby="citation-title" data-nav-tone="light">
        <h2 id="citation-title">Citation</h2>
        <CopyCitation />
      </section>

      <footer data-nav-tone="light">
        <p>© 2026 HoloWorld. All rights reserved.</p>
      </footer>
    </main>
  );
}
