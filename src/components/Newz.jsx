import React, { Component } from "react";
import NewzItem from "./NewzItem";

export default class Newz extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9558a4b105fb44058d0a6e640c028158&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles , totalResults: parsedData.totalResults})
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9558a4b105fb44058d0a6e640c028158&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9558a4b105fb44058d0a6e640c028158&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Newz Monkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewzItem
                  title={article.title}
                  description={article.description}
                  imageURL={article.urlToImage}
                  newsURL={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">	&larr; Previous</button>
        <button  onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}
