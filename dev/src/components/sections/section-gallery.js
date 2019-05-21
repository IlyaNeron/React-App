import React from "react";
import GalleryBlock from "../elements/gallery-block";

class SectionGallery extends React.Component{
    render() {
        return (
            <section className={'section-gallery'}>
                <h2>inside company</h2>
                <div className="gallery-wrapper">
                    <GalleryBlock />
                </div>
            </section>
        );
    }
}

export default SectionGallery;