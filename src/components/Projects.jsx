function Projects() {
  const projects = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "Portfolio Website",
      description:
        "A modern personal portfolio website built with React, JavaScript, and CSS.",
      github: "https://github.com/",
    },
    {
      number: "02",
      category: "MOBILE DEVELOPMENT",
      title: "Login App",
      description:
        "A mobile application with authentication, registration, and database integration.",
      github: "https://github.com/",
    },
    {
      number: "03",
      category: "WEB APPLICATION",
      title: "NutriCheck",
      description:
        "A web-based application designed to provide nutritional information and prediction features.",
      github: "https://github.com/",
    },
  ]

  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <p>SELECTED WORK</p>

        <h2>
          Things I've
          <br />
          <i>built.</i>
        </h2>
      </div>

      <div className="project-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </div>

            <div className="project-info">

              <p className="project-category">
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW ON GITHUB →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Projects