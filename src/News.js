import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";

const url =
  "https://newsapi.org/v2/top-headlines?apiKey=429bdf42c9774763baaaa52ba67ba3ed&language=en";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      category: this.props.category,
      totalResults: null,
    };
  }

  async updateNews() {
    let data = await fetch(
      url +
        `&category=${this.state.category}` +
        `&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  nextPageHandler = async () => {
    this.setState({ loading: true, page: ++this.state.page });
    this.updateNews();
  };

  prevPageHandler = async () => {
    this.setState({ loading: true, page: --this.state.page });
    this.updateNews();
  };

  render() {
    if (this.state.loading) return <Spinner />;
    else
      return (
        <>
          <h1>News app</h1>
          <div className="container">
            <div className="row">
              {this.state.articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={article.title}
                      description={article.description}
                      imageUrl={article.urlToImage}
                      url={article.url}
                      key={article.url}
                      timeStamp={article.publishedAt}
                      author={article.author}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-between">
              <button
                onClick={this.nextPageHandler}
                disabled={
                  !(
                    this.state.page <
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  )
                }
                className="btn btn-dark"
              >
                &rarr; Next
              </button>
              <div>
                {this.state.page} of{" "}
                {Math.ceil(this.state.totalResults / this.props.pageSize)}
              </div>
              <button
                onClick={this.prevPageHandler}
                disabled={this.state.page <= 1}
                className="btn btn-dark"
              >
                Prev &larr;
              </button>
            </div>
          </div>
        </>
      );
  }
}

export default News;
