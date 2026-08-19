import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import profileImage from './assets/Profile.png'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <>
      <Navbar />

      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="hero-status">
              <span></span>
              TERSEDIA UNTUK BEKERJA
            </div>

            <p className="eyebrow">
              DEVELOPER KREATIF / 2026
            </p>

            <h1>
              Muhammad
              <br />
              <span>Jankau</span>
              <br />
              Dausat.
            </h1>

            <p className="hero-description">
              Saya membangun website, aplikasi,
              dan pengalaman digital modern
              dengan kode, kreativitas, dan rasa ingin tahu.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="hero-button primary"
              >
                LIHAT KARYA SAYA →
              </a>

              <a
                href="/cv.pdf"
                download
                className="hero-button secondary"
              >
                UNDUH CV ↓
              </a>

            </div>

            <div className="hero-meta">

              <span>
                PURWOKERTO — INDONESIA
              </span>

              <span>
                GULIR UNTUK MENJELAJAH ↓
              </span>

            </div>

          </div>

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

                <span>
                  01
                </span>

                <span>
                  PROFIL
                </span>

              </div>

            </div>

          </div>

        </section>

        <section
          className="projects"
          id="projects"
        >

          <div className="section-heading">

            <p>
              KARYA PILIHAN
            </p>

            <h2>
              Proyek.
            </h2>

          </div>

          <div className="project-grid">

            <ProjectCard
              number="01"
              category="React JS / Frontend"
              title="Website Portofolio"
              description="Website portofolio pribadi yang dibuat menggunakan React JS, CSS modern, dan desain responsif."
              tech={[
                "React JS",
                "JavaScript",
                "CSS",
                "HTML"
              ]}
              details="Proyek ini merupakan website portofolio pribadi yang dirancang untuk menampilkan proyek, keterampilan, pengalaman, dan informasi kontak. Website ini menggunakan tampilan minimalis, animasi yang halus, desain responsif, dan mode gelap."
              github="https://github.com/"
            />

            <ProjectCard
              number="02"
              category="Laravel / PHP / MySQL"
              title="E-Clouds"
              description="Web yang dirancang untuk melihat cuaca dengan intregasi API yang real time."
              tech={[
                "Laravel",
                "PHP",
                "JS",
                "HTML",
                "CSS"
              ]}
              details="Web yang memudahkan user untuk melihat atau mengecek cuaca secara real time"
              github="https://github.com/JankauDausat15/xipplg5_04_cuaca.git"
            />

            <ProjectCard
              number="03"
              category="Kotlin / Firebase"
              title="Aplikasi Login"
              description="Aplikasi autentikasi mobile dengan fitur login, pendaftaran, dan integrasi Firebase."
              tech={[
                "Kotlin",
                "Android Studio",
                "Firebase",
                "XML"
              ]}
              details="Proyek aplikasi mobile yang dibuat menggunakan Android Studio dan Kotlin. Aplikasi ini memiliki fitur autentikasi seperti login, pendaftaran akun, verifikasi email, dan integrasi database Firebase."
              github="https://github.com/JankauDausat15/Amanjiwo_Reservation.git"
            />

          </div>

        </section>

        <section
          className="about"
          id="about"
        >

          <div className="about-heading">

            <h2>
              Tentang
              <br />
              saya.
            </h2>

          </div>

          <div className="about-content">

            <p>
              Halo! Saya Muhammad Jankau Dausat,
              seorang developer kreatif dari Purwokerto,
              Indonesia.
            </p>

            <p>
              Saya senang membangun website dan
              aplikasi sambil mempelajari teknologi
              baru serta meningkatkan kemampuan
              dalam pengembangan aplikasi.
            </p>

            <p>
              Saat ini saya berfokus pada pengembangan
              frontend, terutama React JS, sambil
              mempelajari teknologi backend.
            </p>

            <div className="skills">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React JS</span>
              <span>PHP</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Git</span>

            </div>

          </div>

        </section>

        <section
          className="contact"
          id="contact"
        >

          <p className="eyebrow">
            PUNYA SEBUAH PROYEK?
          </p>

          <h2>
            Mari bekerja
            <br />
            <span>bersama.</span>
          </h2>

          <a
            href="mailto:isatdausat@gmail.com"
            className="contact-button"
          >
            HUBUNGI SAYA →
          </a>

        </section>

        <footer className="footer">

          <div>

            <strong>
              JANKAU
            </strong>

            <p>
              Developer Kreatif
            </p>

          </div>

          <div className="footer-links">

            <a
              href="https://github.com/JankauDausat15"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a href="mailto:isatdausat@://gmail.com" target="_blank" rel="noopener noreferrer">
              KONTAK 
            </a>



          </div>

          <p className="copyright">
            © 2026 Jankau. Hak cipta dilindungi.
          </p>

        </footer>

      </main>
    </>
  )
}

export default App
