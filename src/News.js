import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

const url =
  "https://newsapi.org/v2/top-headlines?apiKey=94312eb8454540f1a9559d4489ed08f2&language=en";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      category: this.props.category,
      totalResults: null,
      progress: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(20); 
    let data = await fetch(
      url +
        `&category=${this.state.category}` +
        `&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () =>{
    this.setState({page:++this.state.page});
    let data = await fetch(
      url +
        `&category=${this.state.category}` +
        `&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });  
  }

  async componentDidMount() {
    this.updateNews();
  }

  // nextPageHandler = async () => {
  //   this.setState({ loading: true, page: ++this.state.page });
  //   this.updateNews();
  // };

  // prevPageHandler = async () => {
  //   this.setState({ loading: true, page: --this.state.page });
  //   this.updateNews();
  // };

  render() {
    {
      document.title = `News - ${this.props.category.toUpperCase()}`;
    }
    if (this.state.loading) return <Spinner />;
    else
      return (
        <>
              
          <h1>News - {this.props.category}</h1>
          <div className="container">
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length!=this.state.totalResults}
              loader={<Spinner/>}
            >
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
            </InfiniteScroll>

            {/* <div className="d-flex justify-content-between">
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
            </div> */}
          </div>
        </>
      );
  }
}

export default News;
