import React from 'react';
import SignUp from "../elements/sign-up";

class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer'} style={{backgroundImage: 'url(./assets/img/bg-img-2.png)'}}>
                <div className="container">
                    <SignUp />
                </div>
            </footer>
        );
    }
}

export default Footer;