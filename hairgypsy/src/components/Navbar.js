import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css";
import '../index.css'


class Navbar extends Component {
    
    componentDidMount() {
                M.AutoInit();
    }

    render() {
        return (
            <span>
                <nav>
                    <div className="nav-wrapper black">
                    <a href="#" data-target="mobile-demo" className="brand-logo center" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/specialevents">Special Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                </nav>
        
            <ul className="sidenav grey lighten-1" id="mobile-demo">
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><Link className="white-text" to="/aboutme">About Me</Link></li>
                <li><Link className="white-text" to="/services">Services</Link></li>
                <li><Link className="white-text" to="/gallery">Gallery</Link></li>
                <li><Link className="white-text" to="/specialevents">Special Events</Link></li>
                <li><Link className="white-text" to="/contact">Contact</Link></li>
            </ul>
          </span>
        )
    }
}

export default Navbar