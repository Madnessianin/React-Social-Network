import React from 'react'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../Utils/Validators/validators';
import { Input } from '../Common/FormsControl/FormsControl';
import style from '../Common/FormsControl/FormsControl.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} >
            <div>
                <Field placeholder = {"Login"} 
                       name = {"email"}
                       component = {Input}
                       validate = {[required]} />
            </div>
            <div>
                <Field placeholder = {"password"} 
                       name = {"password"} 
                       component = {Input}
                       type = {"password"}
                       validate = {[required]} />
            </div>
            <div>
                <Field component={Input} 
                       name = {"rememberMe"} 
                       type={"checkbox"} />remember me
            </div>
            {props.error && <div className = {style.formCommonError}>
                {props.error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
            
        </form>)
     
}
const LoginFormConteiner = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

    const onSubmit = (data) => {
        props.login(data)
    }
    
    if (props.isAuth) {
        return <Redirect to = {"/profile"} />
    }
    
    return <div>
        <h1>Login</h1>
        <LoginFormConteiner onSubmit = {onSubmit} />
    </div> 
}
export default Login;