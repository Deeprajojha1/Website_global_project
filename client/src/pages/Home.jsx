import '../styles/Home.css'
import avatarOne from '../assets/gettyimages-1467890837-170667a.jpg'
import avatarTwo from '../assets/gettyimages-1139722168-170667a.jpg'
import avatarThree from '../assets/gettyimages-1363870324-170667a.jpg'
import avatarFour from '../assets/gettyimages-1334476335-170667a.jpg'
import avatarFive from '../assets/gettyimages-1092658864-170667a.jpg'
import avatarSix from '../assets/gettyimages-985138674-170667a.jpg'
import avatarSeven from '../assets/gettyimages-1040477914-170667a.jpg'
import avatarEight from '../assets/gettyimages-926639960-170667a.jpg'
import featureOne from '../assets/gettyimages-1440945691-170667a.jpg'
import featureTwo from '../assets/gettyimages-2041144749-170667a.jpg'
import miniOne from '../assets/gettyimages-926639960-170667a.jpg'
import miniTwo from '../assets/gettyimages-609699356-170667a.jpg'
import miniThree from '../assets/gettyimages-1137594939-170667a.jpg'
import miniFour from '../assets/gettyimages-1067600766-170667a.jpg'

const navItems = ['Home', 'Studio', 'Services', 'Contact', 'FAQ']

const heroAvatars = [
  { src: avatarOne, alt: 'Portrait of a man wearing glasses', className: 'avatar avatar-left-1' },
  { src: avatarTwo, alt: 'Portrait of a person in a striped shirt', className: 'avatar avatar-left-2' },
  { src: avatarThree, alt: 'Portrait of a smiling traveler', className: 'avatar avatar-featured' },
  { src: avatarFour, alt: 'Portrait of a man in a blue jacket', className: 'avatar avatar-center-1' },
  { src: avatarFive, alt: 'Portrait of a person at work', className: 'avatar avatar-center-2' },
  { src: avatarSix, alt: 'Portrait of a smiling bearded man', className: 'avatar avatar-right-1' },
  { src: avatarSeven, alt: 'Portrait of a person in a cap', className: 'avatar avatar-right-2' },
  { src: avatarEight, alt: 'Portrait of a smiling person with glasses', className: 'avatar avatar-right-3' },
]

const featureBlocks = [
  {
    title: ['Tomorrow should', 'be better than <span class="pill pill-mint">today</span>'],
    copy:
      'We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.',
    image: featureOne,
    imageAlt: 'Team meeting in a bright office',
    reverse: false,
  },
  {
    title: ['<span class="pill pill-mint">See</span> how we can', 'help you <span class="scribble">progress</span>'],
    copy:
      'We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.',
    image: featureTwo,
    imageAlt: 'People collaborating at a desk',
    reverse: true,
  },
]

const services = [
  {
    meta: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    meta: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    meta: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

const footerColumns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    links: ['48Wru Fulton St, STE 02 Chicago, IL 60607', '123.456.789000', 'info@elementum.com'],
  },
]

function Home() {
  return (
    <div className="home-page">
      <header className="topbar">
        <div className="brand">Elementum</div>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <button className="menu-button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <span className="hero-accent hero-accent-left" aria-hidden="true" />
          <span className="hero-accent hero-accent-right" aria-hidden="true" />

          <div className="hero-copy">
            <h1>
              <span className="headline-line">
                The <span className="scribble">thinkers</span> and
              </span>
              <span className="headline-line">
                doers were <span className="pill pill-pink">changing</span>
              </span>
              <span className="headline-line">
                the <span className="pill pill-mint">status</span> Quo with
              </span>
            </h1>

            <p className="hero-description">
              We are a team of strategists, designers, communicators, researchers. Together, we
              believe that progress only happens when you refuse to play things safe.
            </p>
          </div>

          <div className="avatar-field" aria-hidden="true">
            {heroAvatars.map((avatar) => (
              <div key={avatar.className} className={avatar.className}>
                <img src={avatar.src} alt={avatar.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="features-section" id="studio">
          <div className="feature-shell">
            <span className="feature-shell-border" aria-hidden="true" />
            <span className="feature-shell-wave" aria-hidden="true" />

            {featureBlocks.map((block, index) => (
              <article className={`feature-card ${block.reverse ? 'reverse' : ''}`} key={block.title[0]}>
                <div className="feature-copy">
                  <h2>
                    <span dangerouslySetInnerHTML={{ __html: block.title[0] }} />
                    <span dangerouslySetInnerHTML={{ __html: block.title[1] }} />
                  </h2>
                  <p>{block.copy}</p>
                  <button className="text-link">Read more →</button>
                </div>

                <div className="feature-media">
                  <span className={`triangle ${index === 1 ? 'triangle-alt' : ''}`} aria-hidden="true" />
                  <img src={block.image} alt={block.imageAlt} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <h2 className="section-title">
              What we <span className="pill pill-mint">can</span> offer you!
            </h2>

            <div className="services-list">
              {services.map((service) => (
                <div key={service.title} className="service-row">
                  <p className="service-meta">{service.meta}</p>
                  <div className="service-main">
                    <span>{service.title}</span>
                    <span className="service-arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section" id="faq">
          <div className="container testimonial-wrap">
            <h2 className="section-title section-title-center">
              <span className="pill pill-mint">What</span> our customer says About Us
            </h2>

            <div className="testimonial-card">
              <span className="quote quote-left">“</span>
              <p>
                Elementum delivered the site within the timeline as they requested. In the end,
                the client found a 50% increase in traffic within days since its launch. They also
                had an impressive ability to use technologies the company hasn&apos;t used, which
                have also proved to be easy to use and reliable.
              </p>
              <span className="quote quote-right">”</span>
            </div>

            <div className="testimonial-avatars" aria-hidden="true">
              <img src={miniOne} alt="" className="mini mini-1" />
              <img src={miniTwo} alt="" className="mini mini-2" />
              <img src={miniThree} alt="" className="mini mini-3" />
              <img src={miniFour} alt="" className="mini mini-4" />
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="contact">
          <div className="container newsletter-wrap">
            <span className="newsletter-accent newsletter-accent-top" aria-hidden="true" />
            <span className="newsletter-accent newsletter-accent-right" aria-hidden="true" />

            <div className="newsletter-cta">
              <h2>
                Subscribe to
                <br />
                our newsletter
              </h2>
              <p>To make your stay special and even more memorable.</p>
              <button className="primary">Subscribe Now</button>
            </div>

            <div className="divider" />

            <div className="footer-grid">
              {footerColumns.map((column) => (
                <div key={column.title} className="footer-column">
                  <h3>{column.title}</h3>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="copyright">©2023 Elementum. All rights reserved</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home