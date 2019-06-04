import React from 'react';
import Vacancies from "../elements/vacancies";

class SectionVacancies extends React.Component {

    render() {
        return (
            <section className="section-news">
                <div className="container">
                    <div className="caption-block">
                        <h2>hot vacancies</h2>
                    </div>
                    <Vacancies />
                </div>
                <div className="btn-wrapper">
                    <button type={'button'} className={'btn'}>more vacancies</button>
                </div>
            </section>
        );
    }
}

export default SectionVacancies;