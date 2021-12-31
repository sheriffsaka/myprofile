import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';
import './css/Main.css'

class Contact extends Component{
    render(){
        return(
            <section className="container-1">
                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo" />
                <h3><strong>SacTech Computers</strong></h3>
                <h4>Email: sheriffdeenalade@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=sheriffdeenalade@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Telephone: +2348056176735</h4>
                <h4>Mobile Phone: +2348033618259</h4>
                {/* <hr /> */}
                <br />
                <a href="https://web.facebook.com/saka.alade"><span className="icon fa fa-facebook" style={{color: 'antiquewhite'}} ></span></a>
                <a href="https://twitter.com/Simplysaka"><span className="icon fa fa-twitter" style={{color: 'antiquewhite'}} ></span></a>
                <a href="https://github.com/sheriffsaka"><span className="icon fa fa-github" style={{color: 'antiquewhite'}} ></span></a>
                <a href="https://www.linkedin.com/in/saka-sheriff-alade-924b5278/"><span className="icon fa fa-linkedin-square" style={{color: 'antiquewhite'}} ></span></a>
                <a href="https://sactechcomputers.wordpress.com"><span className="icon fa fa-wordpress" style={{color: 'antiquewhite'}} ></span></a>

            </section>
        )
    }
}


export default Contact