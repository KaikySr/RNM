import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import { Col, Row } from 'react-bootstrap';
// import Footer from '../../components/Footer';

export default function HomePage() {
    return (
        <>
            <section>
                <Row className='content-products'>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                    </Col>
                </Row>
            </section>
      
        </>
    )
}