import { useEffect, useState } from 'react'
import './App.css'

type HeroSlide = {
  image: string
  title: string
  subtitle: string
  primaryAction: string
  secondaryAction: string
}

const heroSlides: HeroSlide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
    title: 'Instalatii Fiabile, Exact La Timp',
    subtitle:
      'Reparatii urgente, montaj curat si servicii de incredere pentru locuinte si afaceri.',
    primaryAction: 'Contact',
    secondaryAction: 'Servicii',
  },
  {
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80',
    title: 'Reparatii Scurgeri, Upgrade Tevi, Fara Stres',
    subtitle:
      'De la picurari mici la proiecte complete, echipa noastra livreaza calitate si liniste.',
    primaryAction: 'Contact',
    secondaryAction: 'Servicii',
  },
]

const serviceCards = [
  {
    icon: 'REPAIR',
    title: 'Reparatie Scurgeri',
    subtitle: 'Diagnostic rapid si reparatie pentru tevi, baterii si scurgeri ascunse.',
  },
  {
    icon: 'DRAIN',
    title: 'Curatare Scurgeri',
    subtitle: 'Desfundare profesionala pentru chiuvete, dusuri, bucatarii si coloane principale.',
  },
  {
    icon: 'HEATER',
    title: 'Boiler Apa Calda',
    subtitle: 'Montaj, mentenanta si inlocuire pentru boilere moderne de apa calda.',
  },
  {
    icon: 'INSTALL',
    title: 'Montaj Obiecte Sanitare',
    subtitle: 'WC, baterii si racorduri pentru electrocasnice montate cu atentie.',
  },
]

const priceCards = [
  {
    title: 'Vizita de Baza',
    price: 'de la 79 lei',
    subtitle: 'Inspectie si ajustari minore efectuate in intervalul normal de lucru.',
  },
  {
    title: 'Serviciu Desfundare',
    price: 'de la 129 lei',
    subtitle: 'Desfundare pentru un punct de scurgere cu verificare completa de debit.',
  },
  {
    title: 'Pachet Scurgeri',
    price: 'de la 159 lei',
    subtitle: 'Pachet de reparatie pentru probleme vizibile la tevi in locuinte.',
  },
  {
    title: 'Interventie Urgenta',
    price: 'de la 199 lei',
    subtitle: 'Asistenta urgenta in afara programului, cu raspuns prioritar.',
  },
]

const contactCards = [
  {
    icon: 'PHONE',
    title: 'Telefon',
    subtitle: '+40 722 123 456',
  },
  {
    icon: 'EMAIL',
    title: 'Email',
    subtitle: 'contact@leh-instalatii.ro',
  },
  {
    icon: 'CLOCK',
    title: 'Program',
    subtitle: 'Luni-Vineri: 08:00 - 20:00',
  },
]

const faqItems = [
  {
    question: 'Oferiti interventie in aceeasi zi?',
    answer:
      'Da. Pentru majoritatea solicitarilor oferim interventie in aceeasi zi, in functie de disponibilitatea echipei.',
  },
  {
    question: 'Aveti reparatii de urgenta pe timpul noptii?',
    answer:
      'Da. Echipa de urgenta poate interveni in afara programului pentru scurgeri grave, tevi sparte si blocaje majore.',
  },
  {
    question: 'Cum sunt calculate preturile pentru reparatii?',
    answer:
      'Incepem cu un diagnostic si comunicam pretul clar inainte de lucru, fara costuri ascunse.',
  },
  {
    question: 'Puteti monta obiecte sanitare cumparate de client?',
    answer:
      'Sigur. Montam obiectele achizitionate de client si verificam ca toate conexiunile sa fie sigure si conforme.',
  },
  {
    question: 'Lucrati atat pentru locuinte, cat si pentru firme?',
    answer:
      'Da. Acoperim atat segmentul rezidential, cat si cel comercial, de la interventii rapide la lucrari extinse.',
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const activeSlide = heroSlides[currentSlide]

  return (
    <div className="site-shell">
      <header className="toolbar">
        <div className="brand-logo" aria-label="LeakHero logo">
          LEH
        </div>
        <nav className="toolbar-nav" aria-label="Main navigation">
          <a href="#home">Acasa</a>
          <a href="#about">Despre noi</a>
          <a href="#services">Servicii</a>
          <a href="#prices">Preturi</a>
          <a href="#contact">Contact</a>
          <a href="tel:+40722123456" className="toolbar-phone">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            +40 722 123 456
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="section section-home">
          <div className="hero-slide">
            <div
              key={currentSlide}
              className="hero-bg"
              style={{
                backgroundImage: `linear-gradient(130deg, rgba(8, 53, 78, 0.75), rgba(235, 125, 26, 0.45)), url(${activeSlide.image})`,
              }}
            />
            <button
              className="slide-control left"
              onClick={goToPreviousSlide}
              aria-label="Slide anterior"
            >
              {'<'}
            </button>

            <div key={`content-${currentSlide}`} className="hero-content">
              <h1>{activeSlide.title}</h1>
              <p>{activeSlide.subtitle}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  {activeSlide.primaryAction}
                </a>
                <a className="btn btn-secondary" href="#services">
                  {activeSlide.secondaryAction}
                </a>
              </div>
            </div>

            <button
              className="slide-control right"
              onClick={goToNextSlide}
              aria-label="Slide urmator"
            >
              {'>'}
            </button>
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="section-header">
            <h2>Despre Noi</h2>
            <p>Echipa ta locala de instalatii, orientata spre calitate si seriozitate.</p>
          </div>
          <div className="about-grid">
            <ul className="about-list">
              <li>Tehnicieni autorizati si asigurati</li>
              <li>Preturi clare fara costuri surpriza</li>
              <li>Serviciu respectuos si executie curata</li>
              <li>Raspuns rapid pentru urgente</li>
            </ul>
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
                alt="Instalator repara tevi"
              />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-header">
            <h2>Servicii</h2>
            <p>Suport complet pentru instalatii rezidentiale si comerciale.</p>
          </div>
          <div className="card-grid services-grid">
            {serviceCards.map((service) => (
              <article key={service.title} className="info-card square-card service-card">
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="prices" className="section">
          <div className="section-header">
            <h2>Preturi</h2>
            <p>Preturi simple si transparente, ca sa planifici cu incredere.</p>
          </div>
          <div className="card-grid">
            {priceCards.map((item) => (
              <article key={item.title} className="info-card square-card price-card">
                <h3>{item.title}</h3>
                <strong className="price">{item.price}</strong>
                <p>{item.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Scrie-ne sau suna-ne. Suntem aici sa rezolvam rapid orice problema.</p>
          </div>
          <div className="contact-list">
            {contactCards.map((item) => (
              <article key={item.title} className="contact-card">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section section-faq">
          <div className="section-header">
            <h2>FAQ</h2>
            <p>Raspunsuri rapide la cele mai frecvente intrebari.</p>
          </div>
          <div className="faq-list" aria-label="Intrebari frecvente">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Toate drepturile rezervate.</footer>
    </div>
  )
}

export default App
