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
                    <h2>latest news</h2>
                    <div className="row">
                        <NewsBlock />
                    </div>
                    <button type={'button'} onClick={this.addingBlocks}>show more</button>
                </div>
            </section>
        );
    }
}

export default SectionNews;