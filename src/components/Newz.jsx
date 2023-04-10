import React, { Component } from "react";
import NewzItem from "./NewzItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
// import "../index.css"

export default class Newz extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "sports",
  };

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9558a4b105fb44058d0a6e640c028158&page=1&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNewz();
  }

  fetchMoreData = async () => {
    this.setState({ pages: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9558a4b105fb44058d0a6e640c028158&page=1&pageSize=${this.props.pageSize}&page=${this.state.page}`;
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
        <h2 className="text-center my-3">
          Newz Monkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
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
              {this.state.articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
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
