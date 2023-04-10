import React, { Component } from "react";
import NewzItem from "./NewzItem";
import Loading from "./Loading";

export default class Newz extends Component {

  static defaultProps = {
    country:'in',
    pageSize:5,
    category:'sports'
  }

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,

  // }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newz Monkey`;
  }

  async updateNewz(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9558a4b105fb44058d0a6e640c028158&page=1&pageSize=${this.props.pageSize}&page=${
      this.state.page
    }`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNewz();
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page - 1});
    this.updateNewz();
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({page:this.state.page + 1});
      this.updateNewz();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Newz Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Loading />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((article) => {
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-dark"
          >
            {" "}
            &larr; Previous
          </button>
          {!this.state.loading && <p>Page <strong>{this.state.page}</strong>/{Math.ceil(this.state.totalResults / this.props.pageSize)}</p>}
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
