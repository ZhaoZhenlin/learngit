import React, { Component } from 'react'
import {Form, Input, Button,Row, Col } from 'antd';
import {UserOutlined,LockOutlined,UnlockOutlined} from '@ant-design/icons';

const {Item} = Form


export default class Register extends Component {
    

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    toggleForm =() =>{
        //调用父级的switchForm方法
        this.props.switchForm('login')
    }
        
    render(){
        return (
            <div>
                 <div className="form-header">
                        <h1>用户注册</h1>
                        <span onClick={this.toggleForm}>登录</span>
                    </div>
                <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        >
                        <Item name="username" rules={[
                            { required: true, message: 'Please input your Username!' }, //必须输入
                            // { max:12, message:"用户名必须小于等于12位"},
                            // { min:4, message:"用户名必须大于等于4位"},
                            // {pattern:/^\w+$/, message:"必须是字母，数字，下划线组成"}
                            ]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>

                        <Item name="password" rules={[
                            { required: true, message: 'Please input your Password!' },
                            ]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Item>

                        <Item name="password" rules={[
                            { required: true, message: 'Please input your Password!' },
                            ]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Item>

                        <Item name="code" rules={[
                            { required: true, message: 'Please input your Password!' }
                            ]} >
                            <Row gutter={13}> {/* input和button之间的距离 */}
                            <Col span={16}> 
                                <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                            </Col>
                            <Col span={8}>
                                <Button type="danger" block>获取验证码</Button>
                            </Col>
                           

                        </Row>
                        </Item>
                        
                        <Item>
                            {/* //block用于帮助让button铺满,父元素多宽就多宽 */}
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Log in
                            </Button>
                        </Item>
                    </Form>
            </div>
             
        )
    }
}