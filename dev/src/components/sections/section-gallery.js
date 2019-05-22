import React from "react";
import GalleryBlock from "../elements/gallery-block";

class SectionGallery extends React.Component{
    render() {
        return (
            <section className={'section-gallery'}>
                <div className="caption-block">
                    <h2>inside company</h2>
                </div>
                <div className="gallery">
                    <div className="gallery-inner">
                        <GalleryBlock />
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionGallery;