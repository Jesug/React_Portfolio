import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/FineDining.png'
import IMG2 from '../../assets/Flask-HelloApp.png'
import IMG3 from '../../assets/E-commerce.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FINE DINING RESTAURANT WEBSITE',
    github: 'https://github.com/Jesug/FrontendProject',
    demo: 'https://jesug.github.io/FrontendProject/index.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PYTHON FLASK HELLO APP',
    github: 'https://github.com/Jesug/Flask_HelloApp',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'E-COMMERCE CLOTHE SHOPPING WEBSITE',
    github: '',
    demo: 'http://Jesug.github.io/ReactApp/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio