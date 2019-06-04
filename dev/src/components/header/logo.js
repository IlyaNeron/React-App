import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div className={'logo'}>
                <a href="#">
                    <img src="./assets/img/logo.png" alt="Image Description" width={'66'} height={'48'}/>
                </a>
            </div>
        );
    }
}

export default Logo;