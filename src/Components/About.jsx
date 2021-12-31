import React, { Component } from 'react'
// import biologo from '../Components/public/image/mypics.jpg';
import './css/Main.css'

class About extends Component{
    render(){
        return(
            <section id="container-about" className="container-about">
                <h1>About Me</h1>

                {/* <img src={biologo} width="180" height="180" alt="abtimg" /> */}
                <p>Diligent software developer with more 6+ years experience in commercial application and website development. </p>
                <p>Willing to work with an organization that support growth to build innovative and cutting edge solutions for clients.</p>
                <p> In previous role as a developer ensure timely completion of task up to 95% on-time. </p>
                <p>Enthusiastic in continous learning and proactive in taking up the tasks. </p>
                

            </section>
        )
    }
}

export default About