import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className={'nav'}>
                <ul className={'nav-menu'}>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">company</a></li>
                    <li><a href="#">careers</a></li>
                    <li><a href="#">contacts</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;