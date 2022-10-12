import React from "react";
import NewsItem from "./NewsItem";
import Button from "./Button";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], page: 1 };
  }

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?title=programming&from=2022-10-10&sortBy=popularity&apiKey=dea58366fa1b42c782d626d72b3b5a6d&pageSize=6&page=6";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({ articles: parsedData.articles });
  }

  render() {
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
            <Button type="dark" value="&rarr; Next" />
            <Button type="dark" value="Prev &larr;" />
          </div>
        </div>
      </>
    );
  }
}

export default News;
