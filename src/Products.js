import Apartment from "./compounents/Apartment";
import { HookContext } from "./context/Context";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/productsStyle.css"
import ImgBody from "./compounents/ImgBody";
import Footer from "./compounents/Footer";



    function Products() {


        const {state: {allData}} = HookContext();

        console.log(allData);


    return (
    <>

    <ImgBody/>

    <div className='bloc-section-home'>

    <Row className="row-products" md={2} xs={1} lg={3}>
        {
        allData.map((apart) => {
            return(
                <Col className="singalCard" key={apart.id}>
                <Apartment {...apart} item={apart} />
                </Col>
            )
        })}
    </Row>
    </div>
    <Footer/>

    </>

    )
    }

    export default Products