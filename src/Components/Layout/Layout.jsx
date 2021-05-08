import React from 'react';
import './Layout.scss';

const Layout = (props) => {
    return (
        <div className="layout-speech">
            <div className="navbar">
                <div className="brand-name"><a href="/#">TextIn</a></div>
                <div className="navbar-link">
                    <div className="link"><a href="/#">Home</a></div>
                    <div className="link"><a href="/#">About Us</a></div>
                    <div className="link"><a href="/#">Donate Us</a></div>
                </div>
            </div>
            <div className="content-speech">
                {props.children}
            </div>
        </div>
    );
}
export default Layout;