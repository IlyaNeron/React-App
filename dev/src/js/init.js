import React from "react";
import Header from '../components/header/header';
import SectionNews from "../components/sections/section-news";
import SectionGallery from "../components/sections/section-gallery";
import SectionInfo from "../components/sections/section-info";
import SectionVacancies from "../components/sections/section-vacancies";
import Footer from "../components/footer/footer";

class Init extends React.Component{
    render() {
        return (
            <div className={'wrapper'}>
                <Header/>
                <main className={'main'}>
                    <SectionInfo />
                    <SectionNews />
                    <SectionGallery />
                    <SectionVacancies />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Init;