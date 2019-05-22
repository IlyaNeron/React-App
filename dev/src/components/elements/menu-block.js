import React from "react";

class MenuBlock extends React.Component{
    render() {
        return (
            <ul className="main-menu">
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <i className={'icon-clock'}></i>
                        </div>
                        <span>The Skinny On Lcd Monitors</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <i className={'icon-star'}></i>
                        </div>
                        <span>Guidelines For Inkjet Cartridge Refill</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <i className={'icon-music'}></i>
                        </div>
                        <span>Do A Sporting Stag Do In Birmingham</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="icon-block">
                            <i className={'icon-house'}></i>
                        </div>
                        <span>Your Computer Usage</span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default MenuBlock;