import React from "react";
import Header from '../components/header/header';
import SectionNews from "../components/sections/section-news";
import SectionGallery from "../components/sections/section-gallery";


class Init extends React.Component{
    render() {
        return (
            <div className={'wrapper'}>
                <Header/>
                <main className={'main'}>
                    <SectionNews />
                    <SectionGallery />
                </main>
                <footer className={'footer'}>

                </footer>
            </div>
        );
    }
}

export default Init;