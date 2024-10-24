import React from 'react'

const JumboTron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 mt-4 w-75 mx-auto jumbo" style={{backgroundColor: "#E0E0E0", height: "350px"}}>
            <div className="container-fluid">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    )
}

export default JumboTron;