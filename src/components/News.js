import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props){
    super(props);
    this.state = {articles:[],
      loading:true,
      page:1,
      totalResults:38
    };
    
  }
      getData = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.props.category}&page=${this.state.page}&pageSize=8`
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({totalResults:parseData.totalResults})
      let Articles = parseData.articles;
      this.setState({loading:false},()=>{
        this.setState({articles:Articles})
      })
      }
      componentDidMount(){
       this.getData()
      }

       fetchMoreData = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.props.category}&page=${this.state.page}&pageSize=8`
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url) 
      let parseData = await data.json()
      let Articles = this.state.articles.concat(parseData.articles)
      this.setState({totalResults:parseData.totalResults})
      this.setState({loading:false},()=>{
        this.setState({articles:Articles})
      })
    }

      render() {
    return (
      <>
      <div className='text-center my-2'>
      <h1>SJ-News Headlines</h1>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.page<= Math.ceil(this.state.totalResults/8)}
          loader={<Loading/>}
        >
      <div className='container my-3'>
      <div className='row' >
       {this.state.articles.map((ele,index)=>{
          return <div  key={index} className='col-md-3 my-2'>
          <NewsItem title={ele.title} description={ele.description} image={ele.urlToImage} urlToImage={ele.url} author={ele.author} time = {ele.publishedAt} source = {ele.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }
}

export default News;