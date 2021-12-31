import React, { Component } from 'react'
import Wordpress from '../Components/public/image/sactechicon1.jpg';

import './css/Main.css'

class Portfolio extends Component{
    render(){
        return(
            <section className="projects">
                <h1 id="Portfolio">Portfolio</h1>
                <p>Some of my past projects include the following and my blog site as well:-</p>

                <div className="container">
                        <a href="https://fairbuy.com.ng"><img src={Wordpress} width="50" height="50" alt="myblog"/><p>E-Commerce Website: Buy and Sell Items Online</p></a>
                        <a href="https://github.com/sheriffsaka/myprofileapp"><img src={Wordpress} width="50" height="50" alt="myblog"/><p>ProfileApp: User Profile Mobile Application Using Flutter</p></a>
                        <a href="https://github.com/sheriffsaka/sactechecommerce"><img src={Wordpress} width="50" height="50" alt="myblog"/><p>A CRUD application</p></a>
                        
                </div>
                
                <div className="container">
                    <a href="https://github.com/ODEVLAB/SH-Mobile-Development-Track-Group-1/" ><img src={Wordpress} width="50" height="50" alt="myblog"/><p>User Profile Android App</p></a>
                    <a href="https://sactechcomputers.wordpress.com/"><img src={Wordpress} width="50" height="50" alt="myblog"/><p>My Blog Site</p></a>
                    <a href="https://internship.sidehustle.ng/course-information/19/"><img src={Wordpress} width="50" height="50" alt="myblog"/><p>Mentoring: Side Hustle Internship Mentor</p></a>
                </div>


                <div className="container">
                    
                </div>

                
            </section>
        )
    }
}

export default Portfolio