import React, { useState } from 'react'
import ClothesData from '../ClothesData'


const Clothes = () => {

  const [data,setData] =  useState(ClothesData);
  const FilterItem = (enteredCategory) =>{
    const updatedItem = ClothesData.filter((current) =>{
      return current.category === enteredCategory;
    });
    setData(updatedItem);
  }
  return (
  <>
     {/* button section here */}
    <div className='order-tab container mt-5'>
      <div className='order-tab d-flex justify-content-around'>
        <button className='btn bt-danger' onClick={()=>setData(ClothesData)}> ALL </button>
        <button className='btn bt-danger' onClick={()=>FilterItem('Women')}> WOMEN </button>
        <button className='btn bt-danger' onClick={()=>FilterItem('children')}> CHILDREN </button>
        <button className='btn bt-danger' onClick={()=>FilterItem('men')}> MEN </button>

      </div>

    </div>

    
     {/* card section here  */}
    <div>
      <div className='container'>
        <div className='row'>
          {
            data.map((cval) => {
              return (
                <div className='col-md-4'>
                  <div className="card">
                    <img src={cval.image} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{cval.name}</h5>
                        <p>Price : {cval.price}</p>
                        <p>Brand : {cval.brand}</p>
                        <p className="card-text"> text information here.......</p>
                        <a href={cval.buylink} className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Clothes