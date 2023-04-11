import React, { Component } from "react";
import NewzItem from "./NewzItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types"
// import "../index.css"

export default class Newz extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "sports",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - Newz Monkey`;
  }

  async updateNewz() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNewz();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    console.log(this.state.page)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
      {<Loading /> && this.state.loading}
        <h2 className="text-center my-3" >
          <span className="text-primary" style={{fontFamily: 'DynaPuff'}}>Newz Monkey </span> - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((article,idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <NewzItem
                      title={article.title}
                      description={article.description}
                      imageURL={article.urlToImage}
                      newsURL={article.url}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
