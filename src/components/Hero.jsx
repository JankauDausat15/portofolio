import profileImage from '../assets/profile.png'

function Hero() {
  return (
    <section className="hero" id="home">

      {/* =========================
          LEFT — CONTENT
      ========================= */}

      <div className="hero-content">

        <div className="hero-status">
          <span></span>
          AVAILABLE FOR WORK
        </div>

        <p className="eyebrow">
          CREATIVE DEVELOPER / 2026
        </p>

        <h1>
          Muhammad
          <br />
          <span>Jankau</span>
          <br />
          Dausat.
        </h1>

        <p className="hero-description">
          I build modern websites, applications,
          and digital experiences with code,
          creativity, and curiosity.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-button primary"
          >
            VIEW MY WORK →
          </a>

          {/* DOWNLOAD CV */}

          <a
          href="/public/cv.pdf"
          download="Muhammad-Jankau-Dausat-CV.pdf"
          className="hero-button secondary"
>
  DOWNLOAD CV ↓
</a>

        </div>

        <div className="hero-meta">

          <span>
            PURWOKERTO — INDONESIA
          </span>

          <span>
            SCROLL TO EXPLORE ↓
          </span>

        </div>

      </div>


      {/* =========================
          RIGHT — PROFILE IMAGE
      ========================= */}

      <div className="hero-image">

        <div className="hero-image-frame">

          <div className="image-placeholder">

            <img
              src={profileImage}
              alt="Muhammad Jankau Dausat"
              className="profile-image"
            />

          </div>

          <div className="image-label">

            <span>01</span>

            <span>PROFILE</span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
