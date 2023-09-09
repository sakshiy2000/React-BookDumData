import React from 'react'
import BookDumData from '../BookDumData'

const BookDum = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        BookDumData.map((cval) => {
                            return (
                                <>
                                    <div className='col-md-4'>
                                        <div className="card" >
                                            <img src={cval.cover} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{cval.name}</h5>
                                                    <p>Author:{cval.author}</p>
                                                    <p>Price :{cval.price}</p>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href={cval.buylink} className="btn btn-primary">Go somewhere</a>
                                                </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default BookDum