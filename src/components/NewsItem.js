
const NewsItem =(props) => {
    return (
      <div className="card m-3">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%"}}>
            {props.source}
          </span>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {props.author ? props.author : "Unknown"} on{" "}
              {new Date(props.timeStamp).toGMTString()}
            </small>
          </p>
          <a
            href={props.url}
            target="_blank"
            className="btn btn btn-outline-success btn-sm"
          >
            See More
          </a>
        </div>
      </div>
    );
}

export default NewsItem;
