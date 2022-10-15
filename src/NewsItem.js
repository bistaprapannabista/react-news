import React from "react";

class NewsItem extends React.Component {
  render() {
    return (
      <div className="card m-3">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%"}}>
            {this.props.source}
          </span>
        <img src={this.props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {this.props.author ? this.props.author : "Unknown"} on{" "}
              {new Date(this.props.timeStamp).toGMTString()}
            </small>
          </p>
          <a
            href={this.props.url}
            target="_blank"
            className="btn btn btn-outline-success btn-sm"
          >
            See More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
