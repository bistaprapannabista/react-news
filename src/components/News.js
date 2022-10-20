import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect,useState } from "react";

const url =
  "https://newsapi.org/v2/top-headlines?apiKey=13f22965d8ec43fb9e7ca9d68cc9d69d&language=en";

const News = (props) => {

      const[articles,setArticles] = useState([]);
      const[page,setPage]= useState(1);
      const[loading,setLoading] = useState(true);
      const[category,setCategory] = useState(props.category);
      const[totalResults,setTotalResults]= useState(null);
      const[progress,setProgress]= useState(0);

  const updateNews = async() =>{
    props.setProgress(20); 
    let data = await fetch(
      url +
        `&category=${category}` +
        `&page=${page}&pageSize=${props.pageSize}`
    );
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async () =>{
    setPage(page+1);
    let data = await fetch(
      url +
        `&category=${category}` +
        `&page=${page}&pageSize=${props.pageSize}`
    );
    let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults);
      setLoading(false);
  }

  useEffect(()=>{updateNews();},[])

  // const nextPageHandler = async () => {
  //   setLoading(true);
  //   setPage(page+1);
  //   updateNews();
  // };

  // const prevPageHandler = async () => {
  //   setLoading(true);
  //   setPage(page-1);
  //   updateNews();
  // };

  const firstLetterCapital = (data) => {
    return data[0].toUpperCase()+data.slice(1)
  }
    {
      document.title = `News - ${firstLetterCapital(props.category)}`;
    }
    if (loading) return <Spinner />;
    else
      return (
        <>
              
          <h1 className="my-3">News - {firstLetterCapital(props.category)}</h1>
          <div className="container">
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length!=totalResults}
              loader={<Spinner/>}
            >
              <div className="row">
                {articles.map((article) => {
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
                onClick={nextPageHandler}
                disabled={
                  !(
                    page <
                    Math.ceil(totalResults / props.pageSize)
                  )
                }
                className="btn btn-dark"
              >
                &rarr; Next
              </button>
              <div>
                {page} of{" "}
                {Math.ceil(totalResults / props.pageSize)}
              </div>
              <button
                onClick={prevPageHandler}
                disabled={page <= 1}
                className="btn btn-dark"
              >
                Prev &larr;
              </button>
            </div> */}
          </div>
        </>
      );
}

export default News;
