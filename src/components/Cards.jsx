import React from 'react'
import Card from './Card';
const Cards = ({data,deleter,selector}) => {
  return (
    <div className="main-box" >
      <h2>University Trip</h2>
      <div className="cards-div">
        {
            data.map((da)=>{
                return <Card {...da} deleter={deleter} selector={selector}/>
            })
        }
        </div>
    </div>
  )
}

export default Cards
