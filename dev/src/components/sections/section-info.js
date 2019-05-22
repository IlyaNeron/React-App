import React from "react";
import InfoBlock from "../elements/info-block";
import MenuBlock from "../elements/menu-block";

class SectionInfo extends React.Component{
    render() {
        return (
            <section className={'section-info'} style={{backgroundImage: 'url(./assets/img/bg-img-1.png)'}}>
                <div className="container">
                    <InfoBlock />
                    <MenuBlock />
                </div>
            </section>
        );
    }
}

export default SectionInfo;