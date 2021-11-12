import React,{Component} from "react";
import '../assets/css/App.css';
import AppHeader from "./Header";
import {Button, Form, InputNumber, Layout} from 'antd';
import Axios from "axios";
const { Header, Content } = Layout;

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
            calculo:[]
        }
        this.onFinish=this.onFinish.bind(this)
    }

    async onFinish(values) {

        console.log(values)

        const url = 'https://finalback2021.herokuapp.com/api/calculos/fibonacci'

        const config = {
            method: 'get',
            url: url,
            headers:{
                'number':values.numero
            }
        };

        const response = await Axios(config)

        const data = response.data.data
        console.log(response)
        this.setState({
            calculo:
                data.map((n)=>
                    <li>{n}</li>
                )

        })
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
                                <h2>Fibonacci</h2>
                            </div>

                            <div className="block">
                                <Form
                                    {...formItemLayout}
                                    name="register"
                                    onFinish={this.onFinish}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="numero"
                                        label="Número"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa un número!',
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

                                {this.state.calculo.length > 0
                                    &&(
                                    <div className="titleHolder">
                                        <ul>{this.state.calculo}</ul>
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
