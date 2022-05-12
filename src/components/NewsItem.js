import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title,description,urlToImage,image,author,source,time}= (this.props)
    return (
      <div>
      <div className="card" >
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-info" style={{left: "89%",zIndex:"1"}}>
      {source}
      <span className="visually-hidden"></span>
    </span>
        <h5 className="card-title">{title}</h5>
       
        <p className="card-text">{description}</p>
        <a href={urlToImage} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        <p className="card-text"><small className="text-muted">by {author?author:"unknown"} on {new Date(time).toGMTString()}</small></p>
      </div>

      </div>
</div>
      
    )
  }
}

export default NewsItem;