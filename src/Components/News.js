import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=1683095536524a658954f761329188b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevBtn = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    handleNextBtn = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }
    render() {
        return (
            <>
                <div className='container my-1'>
                    <h2 className='my-3 text-center'>NewsMonkey ! Here's our top headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevBtn} >&#129044; Previous </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextBtn} >Next &#10141;</button>
                    </div>
                    <div className="row my-2">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>

            </>
        )
    }
}

export default News