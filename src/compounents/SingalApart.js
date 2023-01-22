import { HookContext } from "../context/Context"
import {Carousel} from "react-bootstrap"
import "../styles/SingalApartStyle.css";
import RatingPage from "./Raiting";
import { useNavigate } from "react-router";

    const SingalApart = () => {

        const navigate = useNavigate();

        const {state : {arr} } = HookContext();

        if(arr.length === 0) {

            return <div className="no-apart">
            <h2 className="title-noApart"> 
                No apartment exists <button onClick={() => {
                    navigate("/")
                }} className="return-home">
                return to home page
                </button>
            </h2>
            </div>
        }


    return (
        <> 

        {
                        
            arr.map((prod, index) => {

                    return(

                        <>
                        <Carousel>
                        
                            {
                                prod.pictures.map((p, index) => {
                                    return <Carousel.Item key={p}>
                                        <img
                                            className="d-block w-100  img-carousel"
                                            src={p}
                                            alt="First slide"
                                            />
                                        </Carousel.Item>
                                })
                            }
                        </Carousel>

                        <div style={{margin:"50px"}}  key={index}>
                        </div>
                            <div>

                                <div className="gg">
                                <h2 style={{color:"#FF6060"}}> {prod.title} </h2>
                                <div className="host">
                                        <span style={{color:"#FF6060", fontSize:"25px"}}> {prod.host.name} </span>
                                        <span> <img className="img-host" src= {prod.host.picture} alt="pic" /></span>
                                    </div>
                                </div>

                                <p style={{color:"#FF6060", fontSize:"20px", fontWeight:"400"}}> {prod.location} </p>
                                <div className="bloc-btn-rating">
                                    <div className="bloc-btn">
                                    <span> {prod.tags.map((tag) => {

                                            return <button key={tag} className="action-btn"> {tag} </button>

                                    })} </span>
        
                                    </div>

                    
                            
                                <div className="raiting">
                                    <RatingPage rat={prod.rating}/>
                                </div>                                
                                </div>
                            </div>

                            <div className="bloc-descritption-equimpement">
                                

                                <div className="bloc-description">
                                    <h5 className="equipment-title">Description</h5>
                                    
                                    <p className="descriptino"> {prod.description} </p>
                                </div> 


                                <div className="bloc-equimpement">
                                    <h5 className="equipment-title">Equipments</h5>                                
                                    <p className="equipment"> {prod.equipments.map((elment) => {
                                        return (
                                            
                                                <p> {elment} </p>
                                        )
                                    })} </p>
                                </div>                                    
                            </div>
                            </>
                        )
                    })
        }         
        </>
    )
    }

    export default SingalApart