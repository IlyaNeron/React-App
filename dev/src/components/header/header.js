import React from 'react';
import Logo from "./logo";
import Nav from "./nav-menu";
import UserAction from "./user-action";

class Header extends React.Component {
    render() {
        return (
            <header className={'header'}>
                <div className={'container container-flex'}>
                    <div className={'content-wrapper'}>
                        <Logo />
                        <Nav />
                    </div>
                    <UserAction />
                </div>
            </header>
        );
    }
}

export default Header;