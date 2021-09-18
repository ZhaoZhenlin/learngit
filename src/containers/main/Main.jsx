import React, { Component } from 'react'
import Login from './loginRegister/Login'
import Register from './loginRegister/Register'
import './CSS/main.scss';
import logo from './imgs/SeartenLogo.png';



export default class Main extends Component {
       
    state ={
        formType:'login'
    }

    switchForm =(value)=>{
        this.setState({formType:value})
    }

    render(){
        return (
            <div className="main">
                <header>
                    <img src={logo} alt="logo"/>
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    {this.state.formType === 'login'
                    ?<Login switchForm={this.switchForm}/>
                    :<Register switchForm={this.switchForm}/>}
                </section>
                
            </div>
        )
    }
}


