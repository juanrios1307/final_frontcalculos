import React, { useState,useEffect } from "react";
import {Redirect} from "react-router-dom";
import {Anchor, Drawer, Button, Form, Cascader, Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const { Link } = Anchor;


function AppHeader() {


    useEffect(()=>{

    },[])



        return (
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <i class="fa fa-flask" aria-hidden="true"></i>
                        <a href="/">Final</a>
                    </div>

                </div>
            </div>
        );

}

export default AppHeader;
