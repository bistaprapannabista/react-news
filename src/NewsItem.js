import React from "react";

class NewsItem extends React.Component {
  render() {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={this.props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a
            href={this.props.url}
            target="_blank"
            className="btn btn btn-outline-success btn-sm"
          >
            See More
          </a>
        </div>
        <code>{this.props.timeStamp}</code>
      </div>
    );
  }
}

export default NewsItem;
