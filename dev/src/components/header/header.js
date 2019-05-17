import React from 'react';
import Logo from "./logo";
import Nav from "./nav-menu";

class Header extends React.Component {
    render() {
        return (
            <header className={'header'}>
                <div className={'container'}>
                    <Logo />
                    <Nav />
                </div>
            </header>
        );
    }
}

export default Header;