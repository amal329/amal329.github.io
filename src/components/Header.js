import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
    return (
        <header>
            <div className="items">
                <div className="item logo">
                    <Link to="/">Home</Link>
                </div>
                <div className="item">
                    {/* <a href="#about">About</a> */}
                    <Link to="/#about">About</Link>
                </div>
                <div className="item">
                    {/* <a href="#work">Work</a> */}
                    <Link to="/#work">Work</Link>
                </div>
                <div className="item special">
                    {/* <p>Blog</p> */}
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
        </header>
    )
}
