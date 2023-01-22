import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import "../styles/RatingPageStyle.css";

    const RatingPage = ({rat}) => {
        
        return(
            <>


            {[...Array(5)].map((_, i) => {

                console.log(i)
            
            return (

                <span key={i}>

                { 
                rat > i ? (
                    
                    <AiFillStar  style={{fontSize: "35px", color:"#FF6060", marginLeft: "5px"
                }} />
                    
                ) : (
                    <AiOutlineStar style={{fontSize: "35px", color:"rgba(128, 128, 128, 0.621)", marginLeft: "5px"}}/>
                )
                }
                </span>

            )
            
        
                    

                })}
            </>
        )
    };

    export default RatingPage;