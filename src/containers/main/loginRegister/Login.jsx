import React, { Component } from 'react'
// import {Form, Input, Button,Row, Col } from 'antd';
import {connect} from 'react-redux';
import {createDemo1Action,createDemo2Action} from '../../../redux/actions_creators/test_action';
// import {UserOutlined,LockOutlined,UnlockOutlined} from '@ant-design/icons';
import {validate_password} from '../../../utils/validate';

// const {Item} = Form


class Login extends Component {

    componentDidMount(){
        console.log(this.props); //这里有demo1，demo2，demo
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }; //这里的values就是用户填写的那些东西

    toggleForm=()=>{   
        //调用父级的switchForm方法
        this.props.switchForm('register')
    }
        
    render(){
        return (
            <div>
                <div className="form-header">
                        <h1>用户登录</h1>
                        <span onClick={this.toggleForm}>账号注册</span>
                    </div>
                <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        >
                        <Item name="username" rules={[
                            { required: true, message: '邮箱不能为空' }, //必须输入
                            { type: "email", message:"邮箱格式不正确"},
                            { max: 12, message:"用户名必须小于等于12位"},
                            { min: 4, message:"用户名必须大于等于4位"},
                            { pattern: /^\w+$/, message:"必须是字母，数字，下划线组成"}
                            ]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>

                        <Item name="password" rules={[
                            { required: true, message: 'Please input your Password!' },
                            //自定义属性
                            // ({ getFieldValue }) => ({
                            //     validator(rule, value) {
                            //     if (!value || getFieldValue('password') === value) { //第二次密码和第一次不一样
                            //         return Promise.resolve();
                            //       }
                    
                            //       return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            //     },
                            //   }),
                            // { min:6,message:"不能小于6位"},
                            // { max:20,message:"不能大于20位"},
                            // { pattern:/^[0-9]*$/, message:"请输入数字"}
                            { pattern: validate_password, message:"请输入大于6位小于20位的字母+数字"}
                            ]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Item>

                        <Item name="code" rules={[
                            { required: true, message: '验证码不能为空' },
                            { len: 6, message:"请输入长度为6位的验证码"}
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


export default connect(
    state => ({
        test:state.test,
    }), 

    {
        demo1:createDemo1Action, 
        demo2:createDemo2Action,
    }
)(Login)


