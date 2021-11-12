import React,{Component} from "react";
import '../assets/css/App.css';
import 'antd/dist/antd.css';
import AppHeader from "./Header";
import {Card,Row, Col, Layout} from 'antd';
import Meta from "antd/es/card/Meta";

import fibo from '../assets/images/fibo.jpg'
import fact from '../assets/images/fact.jpg'
import triangulo from '../assets/images/triangulo.png'
import circle from '../assets/images/circle.jpg'
import rectangle from '../assets/images/rectangle.jpg'

const { Header, Content } = Layout;



class MenuPage extends Component {

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <div id="hero" className="heroBlock">

                        <div id="pricing" className="block pricingBlock bgGray">
                            <div className="container-fluid">
                                <div className="titleHolder">
                                    <h2>Final Implementación </h2>
                                    <div className="site-card-wrapper">
                                        <Row gutter={[16, 16]}>


                                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }}>
                                                <a href='/fibonacci'>
                                                    <Card
                                                        hoverable
                                                        cover={<img alt="Modern Design" src={fibo} />}
                                                    >
                                                        <Meta title={"Fibonacci"} />
                                                    </Card>
                                                </a>
                                            </Col>

                                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }}>
                                                <a href='/factorial'>
                                                    <Card
                                                        hoverable
                                                        cover={<img alt="Modern Design" src={fact} />}
                                                    >
                                                        <Meta title={"Factorial"} />
                                                    </Card>
                                                </a>
                                            </Col>




                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                                <a href='/triangulo'>
                                                    <Card
                                                        hoverable
                                                        cover={<img alt="Modern Design" src={triangulo} />}
                                                    >
                                                        <Meta title={"Area Perimetro Triangulo"} />
                                                    </Card>
                                                </a>
                                            </Col>




                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                                <a href='/circulo'>
                                                    <Card
                                                        hoverable
                                                        cover={<img alt="Modern Design" src={circle} />}
                                                    >
                                                        <Meta title={"Area Perimetro Circulo"} />
                                                    </Card>
                                                </a>

                                            </Col>




                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                                <a href='/rectangulo'>
                                                    <Card
                                                        hoverable
                                                        cover={<img alt="Modern Design" src={rectangle} />}
                                                    >
                                                        <Meta title={"Area Perimetro Rectangulo"} />
                                                    </Card>
                                                </a>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default MenuPage
