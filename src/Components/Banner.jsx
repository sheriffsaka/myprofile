import React, { Component } from 'react'
import cse from '../Components/public/image/yt1.png';
import logo from '../Components/public/image/mypics.jpg';

import './css/Main.css'

class Banner extends Component {
    render(){
        return(
            <section className="container-banner">
                <a href="#home"><img id="profilepic" src={logo} width="170" height="170" alt="profilepic" /></a>
                <h1>Hi! I'm Saka Sheriff</h1>
                <p id="pararaph1">
                    Creator<br/>
                    YouTube</p>
                    <a id="logo" href="https://www.youtube.com/channel/UCXMCPGdAAZVuGg5xhU2E4NQ/" ><img src={cse} width="30" height="30" alt="cselogo"/></a>
            </section>
        )
    }
}

export default Banner