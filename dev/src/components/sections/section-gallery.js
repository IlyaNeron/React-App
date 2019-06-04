import React from "react";
import GalleryBlock from "../elements/gallery-block";

class SectionGallery extends React.Component{

    constructor(props) {
        super(props);
        this.galleryInner = React.createRef();
        this.is_active = false;
        this.touchCoord = null;
        this.galleryOffset = null;
    }

    componentDidMount() {
       this.gallerySize();
       this.touchDetect();
    }

    gallerySize() {
        this.galleryInner.style.width = 368*12 + 'px';

    }

    touchDetect() {
        this.galleryInner.addEventListener('mousedown', (e) => {
            this.is_active = true;
            this.touchCoord = e.clientX;
            console.log(this.touchCoord);
        });

        this.galleryInner.addEventListener('mouseup', (e) => {
            this.is_active = false;
        });

        this.galleryInner.addEventListener('mousemove', (e) => {
            if (this.is_active === true) {
                let touchMove = e.clientX;
                if (this.galleryOffset > 0) {
                    this.galleryOffset = null;
                }

                if (touchMove > this.touchCoord) {
                    console.log('swipe-left');
                    this.galleryOffset += 15;
                    this.galleryInner.style.transform = 'translateX(' + this.galleryOffset + 'px' + ')';
                } else {
                    console.log('swipe-right');
                    this.galleryOffset -= 15;
                    this.galleryInner.style.transform = 'translateX(' + this.galleryOffset + 'px' + ')';
                }
            }

        });
    }


    getGalleryInner = (ref => {this.galleryInner = ref;});

    render() {
        return (
            <section className={'section-gallery'}>
                <div className="caption-block">
                    <h2>inside company</h2>
                </div>
                <div className="gallery">
                    <div ref={this.getGalleryInner} className="gallery-inner">
                        <GalleryBlock />
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionGallery;