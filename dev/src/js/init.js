import React from "react";
import Header from '../components/header/header';
import SectionNews from "../components/sections/section-news";
import SectionGallery from "../components/sections/section-gallery";
import SectionInfo from "../components/sections/section-info";

class Init extends React.Component{
    render() {
        return (
            <div className={'wrapper'}>
                <Header/>
                <main className={'main'}>
                    <SectionInfo />
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