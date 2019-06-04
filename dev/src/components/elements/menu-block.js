import React from "react";

class MenuBlock extends React.Component{
    render() {
        return (
            <ul className="main-menu">
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <img src="./assets/img/clock.svg" alt="Image Description" width={'88'} height={'88'}/>
                        </div>
                        <span>The Skinny On Lcd Monitors</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <img src="./assets/img/star.svg" alt="Image Description" width={'88'} height={'88'}/>
                        </div>
                        <span>Guidelines For Inkjet Cartridge Refill</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <img src="./assets/img/music-player.svg" alt="Image Description" width={'88'} height={'88'}/>
                        </div>
                        <span>Do A Sporting Stag Do In Birmingham</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <img src="./assets/img/house.svg" alt="Image Description" width={'88'} height={'88'}/>
                        </div>
                        <span>Your Computer Usage</span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default MenuBlock;