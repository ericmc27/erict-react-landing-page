import React from 'react'

const Card = ({title, content}) => {
    return (
        <div className='card' style={{ height: "400px", width: "18rem", marginLeft: "20px"}}>
            <div className="card-header" style={{widht: "250px", height: "150px", backgroundColor: "#a0a3a3"}}></div>
                <div className="card-body">
                    <h5 className="d-flex card-title justify-content-center">{title}</h5>
                    <p className="card-text">{content}</p>
                </div>
            <div className='d-flex justify-content-center card-footer' style={{height: "60px"}}>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;