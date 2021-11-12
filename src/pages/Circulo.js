import React,{Component} from "react";
import '../assets/css/App.css';
import AppHeader from "./Header";
import {Button, Form, InputNumber, Layout} from 'antd';
import Axios from "axios";
const { Header, Content} = Layout;

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
class Circulo extends Component {

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

        const url = 'https://finalback2021.herokuapp.com/api/medidas/circulo'

        const config = {
            method: 'get',
            url: url,
            headers:{
                'radio':values.radio,
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

                            </div>
                            <div className="titleHolder">
                                <h2>Area y perimetro Circulo</h2>
                            </div>

                            <div className="block">
                                <Form
                                    {...formItemLayout}
                                    name="register"
                                    onFinish={this.onFinish}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="radio"
                                        label="Radio"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa un radio!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={1}/>
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
                                            <h2>Area: {this.state.area}</h2>
                                            <h2>Perimetro: {this.state.perimetro}</h2>
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

export default Circulo
