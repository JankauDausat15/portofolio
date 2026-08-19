import { useEffect, useState } from 'react'

function Navbar() {

  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {

    document.body.className =
      darkMode ? 'dark' : ''

  }, [darkMode])


  return (

    <nav>

      <h2>
        JANKAU
      </h2>


      <div className="nav-links">

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#contact">
          Contact
        </a>


        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-button"
        >

          {darkMode ? '☀️' : '🌙'}

        </button>

      </div>

    </nav>

  )
}

export default Navbar