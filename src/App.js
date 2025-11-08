import React, { useState } from "react";
import "./App.css";

const CisseWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="cisse-website">
      {/* Hero Section with Side Navigation */}
      <section className="hero-section">
        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="menu-icon">{mobileMenuOpen ? "×" : "☰"}</span>
        </button>

        {/* Left Navigation Panel */}
        <div
          className={`left-nav-panel ${mobileMenuOpen ? "mobile-open" : ""}`}
        >
          <div className="logo">
            <h1>Cissé</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#accueil" onClick={() => setMobileMenuOpen(false)}>
                  ▸ MA COMMUNE
                </a>
              </li>
              <li>
                <a href="#locations" onClick={() => setMobileMenuOpen(false)}>
                  ▸ MON QUOTIDIEN
                </a>
              </li>
              <li>
                <a href="#loisirs" onClick={() => setMobileMenuOpen(false)}>
                  ▸ MES LOISIRS
                </a>
              </li>
              <li>
                <a href="#ephemerides" onClick={() => setMobileMenuOpen(false)}>
                  ▸ MES DÉMARCHES
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Image Slider */}
        <div className="hero-slider">
          <img
            src={heroImages[currentSlide]}
            alt="Cissé"
            className="hero-image"
          />
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ›
          </button>
          <div className="slider-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Top Right Buttons */}
        <div className="top-buttons">
          <button className="btn-secondary">ACTUALITÉS</button>
          <button className="btn-secondary">ANNUAIRE</button>
          <button className="btn-secondary">RÉSERVER</button>
          <button className="btn-primary">CONTACT</button>
        </div>
      </section>

      {/* Icon Grid */}
      <section className="icon-grid">
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </div>
          <p>
            DÉMARCHES
            <br />
            CITOYENNES
          </p>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
          </div>
          <p>
            ACTIONS
            <br />
            MUNICIPALES
          </p>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            </svg>
          </div>
          <p>
            BUDGET &<br />
            FINANCES
          </p>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
            </svg>
          </div>
          <p>
            URBANISME
            <br />
            HABITAT
          </p>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <p>
            VIE LOCALE
            <br />& SOLIDARITÉ
          </p>
        </div>
        <div className="icon-item">
          <div className="icon-circle">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <p>
            PUBLICATIONS
            <br />
            MUNICIPALES
          </p>
        </div>
      </section>

      {/* A La Une Section */}
      <section className="news-section">
        <h2 className="section-title">À LA UNE</h2>
        <div className="news-grid">
          <div className="news-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop"
              alt="News 1"
            />
            <div className="news-content">
              <h3>Bienvenue sur notre nouvelle site internet!</h3>
              <p>
                Vous pouvez désormais découvrir plus facilement toutes les
                informations sur votre commune en ligne...
              </p>
              <a href="#" className="read-more">
                Lire la suite →
              </a>
            </div>
          </div>
          <div className="news-card">
            <img
              src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop"
              alt="News 2"
            />
            <div className="news-content">
              <h3>Nouveau club de basket sur Cissé</h3>
              <p>
                Suite au rapport rédigé sur Cissé à l'Agglomération du Grand
                Poitiers, un nouveau club de basket a été créé...
              </p>
              <a href="#" className="read-more">
                Lire la suite →
              </a>
            </div>
          </div>
          <div className="sidebar">
            <div className="sidebar-item">
              <span className="badge">27</span>
              <h4>Animation bibliothèque</h4>
            </div>
            <div className="sidebar-item">
              <span className="badge">14</span>
              <h4>Fête nationale</h4>
            </div>
            <div className="sidebar-item">
              <span className="badge">14</span>
              <h4>Fête nationale</h4>
            </div>
          </div>
        </div>

        <div className="bottom-controls">
          <div className="carousel-controls">
            <button className="control-btn">‹</button>
            <button className="control-btn">›</button>
          </div>
          <button className="btn-calendar">CALENDRIER</button>
          <div className="sidebar-buttons">
            <button className="btn-green">CALENDRIER</button>
            <button className="btn-outline">AGENDA</button>
          </div>
        </div>

        <div className="fil-info">
          <div className="fil-info-content">
            <div className="fil-info-icon">📄 FIL INFO</div>
            <p>
              Fermeture de la mairie et des services municipaux le samedi 14
              juillet
            </p>
          </div>
          <div className="carousel-controls">
            <button className="control-btn">‹</button>
            <button className="control-btn">›</button>
          </div>
        </div>
      </section>

      {/* Zoom Sur Section */}
      <section className="zoom-section">
        <h2 className="section-title">ZOOM SUR</h2>
        <div className="zoom-grid">
          <div className="zoom-card">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=200&fit=crop"
              alt="Bulletin"
            />
            <div className="zoom-overlay">
              <h3>BULLETIN MUNICIPAL</h3>
            </div>
          </div>
          <div className="zoom-card">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop"
              alt="Restaurants"
            />
            <div className="zoom-overlay">
              <h3>NOS RESTAURANTS</h3>
            </div>
          </div>
          <div className="zoom-card">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
              alt="Communes"
            />
            <div className="zoom-overlay">
              <h3>
                ROUTES DES COMMUNES
                <br />À FLEUR DE LYS
              </h3>
            </div>
          </div>
          <div className="zoom-card zoom-card-dark">
            <div className="zoom-dark-content">
              <div className="logo-small">
                <h4>Cissé</h4>
              </div>
              <p>
                Ville de
                <br />
                2,565 hab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-v-shape"></div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>Mairie de Cissé</h4>
            <p>
              1, rue du stade
              <br />
              86170 Cissé
              <br />
              France
            </p>
            <p>Tél : 05 49 42 72 89</p>
            <button className="footer-btn">📧 NOUS CONTACTER</button>
          </div>

          <div className="footer-section">
            <h4>Horaires d'ouverture</h4>
            <p>
              Lundi, Mardi, Jeudi: 14h - 17h30
              <br />
              Mercredi: 9h - 12h
              <br />
              Vendredi: 14h - 18h30
              <br />
              Samedi: 9h - 11h30
            </p>
            <button className="footer-btn2">📍 NOUS RENDRE VISITE</button>
          </div>

          <div className="footer-section">
            <div className="footer-logo">
              <h3>Cissé</h3>
              <p>
                Ville de
                <br />
                2,565 hab.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">ACCUEIL</a>
            <a href="#">MENTIONS LÉGALES</a>
            <a href="#">PLAN DU SITE</a>
            <a href="#">CONTACT</a>
            <a href="#">ACCESSIBILITÉ</a>
            <a href="#">CRÉDITS</a>
          </div>

          <div className="footer-logos">
            <img
              src="https://via.placeholder.com/60x40/2d5f3f/ffffff?text=Logo1"
              alt="Partner 1"
            />
            <img
              src="https://via.placeholder.com/60x40/2d5f3f/ffffff?text=Logo2"
              alt="Partner 2"
            />
            <img
              src="https://via.placeholder.com/60x40/2d5f3f/ffffff?text=Logo3"
              alt="Partner 3"
            />
            <img
              src="https://via.placeholder.com/60x40/2d5f3f/ffffff?text=Logo4"
              alt="Partner 4"
            />
            <img
              src="https://via.placeholder.com/60x40/2d5f3f/ffffff?text=Logo5"
              alt="Partner 5"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CisseWebsite;
