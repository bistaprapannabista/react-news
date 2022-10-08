import React from "react";
import NewsItem from "./NewsItem";

class News extends React.Component{
    constructor(props){
        super(props);
        console.log(getArticles());
        this.state = articles:getArticles();
    }
    render() {
        return(
        <>
        <h1>News app</h1>
        <div className="container">
            <div className="col">
                <div className="row">
                    {this.state.articles.map((article)=><NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url} key={article.url} timeStamp={article.publishedAt}/>)}
                </div>
            </div>
        </div>
        </>
       )
    }
} 

export default News;