import React, { Component } from 'react'
import '../css/header.css'
class Header extends Component{
    
    render(){
        return(
            <div className="topnav">
                <a className="active" href="#home">Home</a>
            </div>
        )
    }
}

export default Header;