import { useState } from "react"

function ProjectCard({
  number,
  title,
  category,
  description,
  tech,
  github,
  demo
}) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      {/* ================= PROJECT CARD ================= */}

      <article className="project-card">

        {/* TOP */}
        <div className="project-top">

          <p className="project-number">
            {number}
          </p>

          <span className="project-arrow">
            ↗
          </span>

        </div>


        {/* INFO */}
        <div className="project-info">

          <p className="project-category">
            {category}
          </p>

          <h3>
            {title}
          </h3>

          <p className="project-description">
            {description}
          </p>

          {/* INI TOMBOL VIEW PROJECT */}
          <button
            type="button"
            className="project-button"
            onClick={() => setShowDetail(true)}
          >
            VIEW PROJECT →
          </button>

        </div>

      </article>


      {/* ================= PROJECT DETAIL ================= */}

      {showDetail && (
        <div
          className="project-overlay"
          onClick={() => setShowDetail(false)}
        >

          <div
            className="project-detail"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              type="button"
              className="close-button"
              onClick={() => setShowDetail(false)}
              aria-label="Close project"
            >
              ✕
            </button>


            {/* NUMBER */}
            <p className="project-number">
              {number}
            </p>


            {/* TITLE */}
            <h2>
              {title}
            </h2>


            {/* CATEGORY */}
            <p className="project-category">
              {category}
            </p>


            {/* DESCRIPTION */}
            <p className="project-detail-description">
              {description}
            </p>


            {/* TECH STACK */}
            <div className="project-tech">

              <p>
                TECH STACK
              </p>

              <div className="tech-list">

                {tech?.map((item, index) => (
                  <span key={`${item}-${index}`}>
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* LINKS */}
            <div className="project-links">

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB →
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE DEMO →
                </a>
              )}

            </div>

          </div>

        </div>
      )}

    </>
  )
}

export default ProjectCard