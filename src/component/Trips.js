import munich from '../images/munich.jfif'
import location from '../images/location.png'
export default function Trips(props)
{
    return(
        <div className="trips"> 
         <img className='card-img' src={props.image}></img>
         <div className="text"> 
         
         <div className="localisation">
         <img className='card-img' src={location}></img>
         <h5>{props.country} </h5>
         <a href={props.location}>Open in Google Map </a>
         </div>

         <h2>{props.city}</h2>
         <h5>{props.dateStart}-{props.dateEnd}</h5>
         <p>{props.description}</p>
          </div>
         </div>
    )
}