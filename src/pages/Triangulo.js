import React,{Component} from "react";
import '../assets/css/App.css';
import AppHeader from "./Header";
import {Button, Form, InputNumber, Layout} from 'antd';
import Axios from "axios";
const { Header, Content, Footer } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
class Fibonacci extends Component {

    constructor() {
        super();
        this.state ={
            area:0,
            perimetro:0
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(values) {

        console.log(values)

        const url = 'localhost:5000/api/medidas/triangulo'

        const config = {
            method: 'get',
            url: url,
            headers:{
                'base':values.base,
                'altura':values.altura,
                'lado1':values.lado1,
                'lado2':values.lado2,
            }
        };

        const response = await Axios(config)

        const data = response.data.data

        this.setState({area:data.area, perimetro:data.perimetro})
    }

    render() {

        return (

            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <div id="hero" className="registerBlock">
                        <div className="container-fluid">
                            <div className="titleHolder">
                                <h2>Triangulo</h2>
                            </div>

                            <div className="block">
                                <Form
                                    {...formItemLayout}
                                    name="register"
                                    onFinish={this.onFinish}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="base"
                                        label="Base"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa una base!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="altura"
                                        label="Altura"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa una altura!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="lado1"
                                        label="Lado 1"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa una lado 1!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="lado2"
                                        label="Lado 2"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa una lado 2!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0}/>
                                    </Form.Item>

                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Calcular
                                        </Button>
                                    </Form.Item>
                                </Form>

                                {this.state.area > 0
                                &&(
                                    <div>
                                        <div className="titleHolder">
                                            <h2>{this.state.area}</h2>
                                            <h2>{this.state.perimetro}</h2>
                                        </div>
                                    </div>
                                )
                                }

                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default Fibonacci
