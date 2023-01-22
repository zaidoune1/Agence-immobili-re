    
    import Card from 'react-bootstrap/Card';
    import { Link} from 'react-router-dom';
    import { HookContext } from '../context/Context';
    import "../styles/AparmentStyle.css"

    function Apartment({title, cover, item}) {

        const {dispatch} = HookContext();

    return (
        <>

        <Card className="card-bloc" style={{ width: '100%', height: "100%", borderRadius: "20px", border:"none" }}>
        <Card.Img className='img-cover' variant="top" src= {cover} />
        <Card.Body>
        <Card.Title style={{marginBottom:"20px"}}>{title}</Card.Title>
        <Link className='details' style={{textDecoration: "none"}} to="/SingalApart" onClick={() => {
            dispatch({
                type: "ADD-APART",
                payload: item
            })
        }}><span className='button-details' style={{backgroundColor: "#FF6060"}} >Details...</span></Link>
        </Card.Body>
        </Card>
        </>
    );
    }

    export default Apartment;