import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import './signup.css'
export default function Signup() {

    const [user, setUser] = useState({ fname: '', lname: '', email: '', password: '' });
    const history = useHistory();

    const onChangeFname = (event) => {
        setUser(prv => {
            return {
                ...prv, fname: event.target.value
            }
        })
    }
    const onChangeLname = (event) => {
        setUser(prv => {
            return {
                ...prv, lname: event.target.value
            }
        })
    }
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
        console.log("user", user)

        history.push("/Login")
    }
    const clickSignUp = () => {
        if(!user.email.trim()|| !user.password.trim()|| !user.fname.trim()|| !user.lname.trim()){
            alert('Enter Valid Name, Email and password')
            return;
        }
        const strUsers = localStorage.getItem("product-users");
        let userList = [];
        if (strUsers) {
            userList = JSON.parse(strUsers);
        }
        userList.push(user)
        localStorage.setItem("product-users", JSON.stringify(userList));
        history.push("/Login")
    }

    return (
        <div className='main'>
            <div className='sub-main'>
                <div>
                    <label >First Name</label>
                    <input className='inp' type="text" placeholder='Enter your first name'
                    onChange={onChangeFname}
                    required />
                </div>
                <div>
                    <label >Last Name</label>
                    <input className='inp' type="text" placeholder='Enter your last name' 
                    onChange={onChangeLname}
                    required />
                </div>
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
                <span><button className='btn btn-green' onClick={clickSignUp}>SIGNUP</button></span>
                <div>
                    <h3>If You are already SignUp please Login here</h3>
                    <button className='btn btn-blue' onClick={submitLogin}>LOGIN</button>
                </div>

            </div>
        </div>
    )
}
