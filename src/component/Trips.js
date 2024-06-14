import munich from '../images/munich.jfif'
import location from '../images/location.png'
import heart from '../images/heart.png'
import heart2 from '../images/heart2.png'
import React from 'react'

export default function Trips(props)
{

    const [likes,count]= React.useState(0)
    function countlikes()
    {
        
            count(function (oldValue)
            {
                return oldValue + 1
            })
    }

    const isFavorite=false

    const [favorite,setFavorite]=React.useState(isFavorite)

    function setLikes()
    {
        setFavorite(function (oldValue)
        {
            return !oldValue
        })
    }

    const image=favorite ? heart : heart2



    return(
        <div className="trips"> 
         <img className='card-img' src={props.image}></img>
         <div className="text"> 
         
         <div className="localisation">
         <img className='card-img' src={location}></img>
         <h5>{props.country} </h5>
         <a href={props.location}>Open in Google Map </a>
         </div>

         <div className="info" >
         <h2>{props.city}</h2>
         <button className="like" onClick={countlikes} >
         <img  src={image} onClick={setLikes}></img> {likes} 
        </button>
         </div>
         <h5>{props.dateStart}-{props.dateEnd}</h5>
         <p>{props.description}</p>
          </div>
         </div>
    )
}