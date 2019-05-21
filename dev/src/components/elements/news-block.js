import React from 'react';

const NEWS_API = 'https://jsonplaceholder.typicode.com/posts';
const imgSize = {
    width: 432,
    height: 288,
};
const defaultBlocksCount = 6;

class NewsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            showArr: [],
        };
    }

    componentDidMount() {
        fetch(NEWS_API)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    postsOut(postsArg) {
        let showLength = this.state.showArr.length;
        for (let i = showLength; i < showLength + defaultBlocksCount; i++) {
            this.state.showArr.push(postsArg[i]);
        }
    }

    render() {
        const {error, isLoaded, posts, showArr} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        }

        else if (!isLoaded) {
            return (
                <div>Loading...</div>
            )
        }

        else {
            this.postsOut(posts);

            return (
                showArr.map(post => (
                    <div className={'col'}>
                        <div key={post.id} className="news-block">
                            <div className="image-block">
                                <img src={'https://picsum.photos/id/' + post.id + '/' + imgSize.width + '/' + imgSize.height}
                                     alt="Image Description"
                                     width={imgSize.width}
                                     height={imgSize.height}
                                />
                            </div>
                            <div className="description-block">
                                <h3 key={post.title}>{post.title}</h3>
                                <p key={post.body}>{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))
            );
        }
    }
}

export default NewsBlock;