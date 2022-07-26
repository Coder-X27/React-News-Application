import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description,imageUrl,url,author,date } = this.props
        return (
            <>
                <div key={url} className="card border-dark mb-3" style={{ maxWidth: "25rem" }}>
                    <img src={!imageUrl?"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80":imageUrl} className="card-img-top" style={{height:"300px"}} alt="img is not available"></img>
                    <div className="card-header text-dark" style={{maxHeight:"150px"}}><h4>{title}</h4></div>
                    <div className="card-body">
                        <p className="card-text text-dark">{description}</p>
                        <p className="card-text text-dark">{description}</p>
                        <p className="card-text "><small className='text-danger'>Author :- {!author?"unknown":author} on {new Date(date).toGMTString()}.</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
                
            </>
        )
    }
}

export default NewsItem