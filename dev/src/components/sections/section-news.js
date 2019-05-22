import React from 'react';
import NewsBlock from "../elements/news-block";

class SectionNews extends React.Component {

    addingBlocks = () => {
        this.setState({
            adding: true
        });
    };

    render() {
        return (
            <section className="section-news">
                <div className="container">
                    <div className="caption-block">
                        <h2>latest news</h2>
                    </div>
                    <div className="row">
                        <NewsBlock />
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button type={'button'} className={'btn'} onClick={this.addingBlocks}>more news</button>
                </div>
            </section>
        );
    }
}

export default SectionNews;