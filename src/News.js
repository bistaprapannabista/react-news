import React from "react";
import NewsItem from "./NewsItem";
import spinner from "./spinner.gif";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], page: 1, pageSize: 6, loading: true };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?q=program&apiKey=157f1d7256d245b4ace8cc5b93536ca3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles.length);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false});
  }

  nextPageHandler = async () => {
    this.setState({ loading:true});
    this.setState({ page: ++this.state.page });
    let url = `https://newsapi.org/v2/top-headlines?q=program&apiKey=157f1d7256d245b4ace8cc5b93536ca3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles.length);
    this.setState({ articles: parsedData.articles,loading:false});
  };

  prevPageHandler = async () => {
    this.setState({ loading:true});
    this.setState({ page: --this.state.page });
    let url = `https://newsapi.org/v2/top-headlines?q=program&apiKey=157f1d7256d245b4ace8cc5b93536ca3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,loading:false});
  };

  render() {
    if (this.state.loading === true) {
      return <img src={spinner} alt="..." />;
    } else {
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
                    />
                  </div>
                );
              })}
            </div>

            <div class="d-flex justify-content-between">
              <button
                onClick={this.nextPageHandler}
                disabled={this.state.articles.length != 6}
                className="btn btn-dark"
              >
                &rarr; Next
              </button>
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
}

export default News;
