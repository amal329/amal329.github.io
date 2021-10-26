import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="items">
                <div className="item logo">
                    <a>Home</a>
                </div>
                <div className="item">
                    <a>About</a>
                </div>
                <div className="item">
                    <a>Work</a>
                </div>
                <div className="item special">
                    <a>Blog</a>
                </div>
            </div>
        </header>
    )
}
