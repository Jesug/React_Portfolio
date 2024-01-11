import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              < BiCheck className='service_list-icon'/>
              <p>Develop and maintain visually appealing, user-friendly websites and web applications using HTML, CSS, JavaScript</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Collaborate with cross-functional teams, including designers, developers, and product managers, to meet user needs and expectations.</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Optimize websites and applications for speed, accessibility, and cross-browser compatibility.</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Debug and resolve technical issues promptly to ensure a seamless user experience.</p>
            </li>
          </ul>
        </article>
        {/* Web Development*/}

        <article className="service">
          <div className="service_head">
            <h3>Software Testing</h3>
          </div>

          <ul className="service_list">
          <li>
              < BiCheck className='service_list-icon'/>
              <p>API Testing.</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Defining the test environment.</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Developing test cases.</p>
            </li>


            <li>
              < BiCheck className='service_list-icon'/>
              <p>Writing scripts.</p>
            </li>

            <li>
              < BiCheck className='service_list-icon'/>
              <p>Analyzing test results and submitting defect reports.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
      </div>
    </section>
  )
}

export default Services