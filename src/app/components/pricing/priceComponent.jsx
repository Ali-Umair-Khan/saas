import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons";

import './pricing.scss';
const PricingComponent = ({features}) => {
    const {type,text,price,qualities}= features;
    return(
            <div className='pricing__cards'>    
                <h1>{type}</h1>
                <p>{text}</p>
                <h2>{price}</h2>
                {qualities.map((q,i)=>(
                    <h3 key={i}><FontAwesomeIcon icon={faCheck}  style={{color:'grey',margin:'0 1.2rem', fontSize:'1.8rem'}}/>{q}</h3>
                ))}
                <button>Get Started</button>
            </div>
    )
}

export default PricingComponent

{/* <FontAwesomeIcon icon={faCheck} /> */}