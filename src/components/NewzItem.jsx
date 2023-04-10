import React, { Component } from "react";

export default class NewzItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, source, author, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1" , left:"90%"}}>
            {source}
          </span>
          <img
            src={
              imageURL
                ? imageURL
                : "https://images.hindustantimes.com/tech/img/2023/04/06/1600x900/HT_Tech_25_1680749172316_1680749172645_1680749172645.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsURL}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
          <div class="card-footer text-body-secondary">
            By <strong>{author}</strong> on {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    );
  }
}
