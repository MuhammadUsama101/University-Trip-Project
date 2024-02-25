import React, { useState } from 'react'

const Card = ({id,imageLink,price,place,info,deleter,selector}) => {
    const [readmore,setReadmore]=useState(false);
    function readMoreHandler(){
        setReadmore(!readmore);
    }
    const description = readmore ? info : `${info.substring(0,200)}...`
  return (
    <div className="cards-info">
    <img src={imageLink} alt="" />
    <div className="headings">
    <h4>{price}</h4>
    <h4>{place}</h4>
    </div>
    <div className="info-div">
        {description}
        <span onClick={readMoreHandler}>
        {readmore ? `show less`:`read more`}
        </span>
    </div>
    <div className="buttons-div" >
    <button onClick={()=>deleter(id)}  >Not Interesed</button>
    <button onClick={()=>selector(id)} >Interested</button>
    </div>
</div>
  )
}

export default Card
