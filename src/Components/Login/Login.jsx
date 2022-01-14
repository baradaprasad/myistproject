import React,{useState} from 'react'
import './login.css'
import { useHistory } from 'react-router-dom';
export default function Login() {

    
    const [user, setUser] = useState({ email: '', password: '' });
    const history = useHistory();

    const onChangeEmail = (event) => {
        setUser(prv => {
            return {
                ...prv, email: event.target.value
            }
        })
    }
    const onChangePassword = (event) => {
        setUser(prv => {
            return {
                ...prv, password: event.target.value
            }
        })
    }
    const submitLogin = () => {
        if(!user.email.trim()|| !user.password.trim()){
            alert('Enter Valid Email and password')
            return;
        }
        console.log("user", user)
        const strUsers = localStorage.getItem("product-users");
        let userList = [];
        if (strUsers) {
            userList = JSON.parse(strUsers);
        }
        if (!userList.length) {
            alert('You have to signup before login')
        } else {
            let  currentUser = null;
            userList.forEach(element => {
                if (element.email === user.email && element.password === user.password) {
                    currentUser=element;
                }
            });
            if (currentUser) {
                localStorage.setItem('product',JSON.stringify(currentUser))
                history.push("/Dashboard")
            } else {
                alert('Email Or Password is wrong')
            }


        }

    }
    const clickSignUp = () => {
        history.push("/Signup")
    }
    return (
        <div className='login-main'>
            <div className='log-sub-main'>
            <div>
                <label >User</label>
                <input className='inp' type="text" placeholder='Enter your mail'
                onChange={onChangeEmail}
                required />
            </div>
            <div>
                <label >Password</label>
                <input className='inp' type="password" placeholder='Enter password'
                onChange={onChangePassword}
                required />
            </div>
            <span><button className='btn btn-blue' onClick={submitLogin}>LOGIN</button></span>
            <div>
                <h3>If You are not registred before Please SignUp here</h3>
                <button className='btn btn-green' onClick={clickSignUp}>SIGNUP</button>
            </div>

        </div>
        </div>
    )
}
