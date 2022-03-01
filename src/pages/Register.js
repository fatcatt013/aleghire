import React, {useState} from 'react';
import Axios from 'axios';

const Register = (props) => {
    const [register, setRegister] = useState(true);
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(0);


    const handleRegister = (e) => {
        e.preventDefault();
        let err = false;

        console.log("Registering with: \nemail=" + email + "\nusername=" + username +
            "\npwd=" + pwd + "\npwd2=" + confirmPwd);

        if (!(pwd === confirmPwd)) {
            alert("The passwords must match.");
            return
        }

        if (!(username.length > 0 && pwd.length > 0 && email.length > 0 && confirmPwd.length > 0)) {
            alert("All input fields must be filled.");
            return;
        }
        console.log("Passwords are matching.");

        Axios.post('http://localhost:3001/check-register',
            {
                username: username,
                email: email
            }
        ).then(res => {
            if (res.data.err) {
                console.log("There was a server-side error. Check the client side for more details.")
                console.log(res.data.err);
                err = true;
            }
            if (res.data.message === 1) {
                console.log("Entered credentials are available.");
                return;
            }
            if (res.data.message) {
                console.log("There was a client side error: " + res.data.message);
                alert(res.data.message);
                err = true;
            }
        }).then(() => {
                if (err) {
                    return;
                }
                console.log("Attempting to register to the database...");
                Axios.post("http://localhost:3001/register",
                    {
                        username: username,
                        password: pwd,
                        email: email
                    }
                ).then((res) => {
                    if (res.data.message === 1) {
                        console.log("Successfully registered");
                    } else {
                        console.log("Something went wrong on the server side.");
                    }
                    getId(username);
                })
            }
        )
    }

    async function getId(username)  {

        const res = await Axios.post("http://localhost:3001/getId",
            {
                username: username
            }
        );

        if (res.data.result) {
            console.log("GetId() => ID " + res.data.result[0].id + " queried successfully.");
        }
        if (res.data.message) {
            console.log(res.data.message);
        }
        props.handleAuth(true, res.data.result[0].id, res.data.result[0].password);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if (! (username.length > 0 && pwd.length > 0)) {
            alert("All input fields must be filled.");
            return;
        }

        console.log("Logging in with: " + username + "\n" + pwd);
        Axios.post("http://localhost:3001/login",
            {
                username: username,
                password: pwd,
            }).then((res) => {
            if (res.data.message === 1) {
                console.log("Successfully logged in!");
                props.handleAuth(false, res.data.result[0].id, res.data.result[0].password);
            } else {
                alert(res.data.message);
            }
        })
    }

    const handleChange = (e, register) => {
        e.preventDefault();
        setUsername("");
        setPwd("");
        setEmail("");
        setConfirmPwd("");
        setRegister(register);
    }

    if (register) {
        return (
            <div className='register-container'>
                <form action="" className='register-form'>
                    <h1>Register</h1>
                    <div className='register-inputs'>
                        <input type="text" placeholder='Username'
                               onChange={(e) => setUsername(e.target.value)}
                               value={username}/>
                        <input type="text" placeholder='Email'
                               onChange={(e) => setEmail(e.target.value)}
                               value={email}/>
                        <input type="password" placeholder='Password'
                               onChange={(e) => setPwd(e.target.value)}
                               value={pwd}/>
                        <input type="password" placeholder='Confirm Passord'
                               onChange={(e) => setConfirmPwd(e.target.value)}
                               value={confirmPwd}/>
                    </div>
                    <button className='register-button'
                            onClick={(e) => handleRegister(e)}>Submit
                    </button>
                    <button className='register-button'
                            onClick={(e) => handleChange(e, false)}>Log In
                    </button>
                </form>
            </div>
        )
    } else {
        return (
            <div className='register-container'>
                <form action="" className='register-form'>
                    <h1>Log In</h1>
                    <div className='login-inputs'>
                        <input type="text" placeholder='Username'
                               onChange={(e) => setUsername(e.target.value)}
                               value={username}/>
                        <input type="password" placeholder='Password'
                               onChange={(e) => setPwd(e.target.value)}
                               value={pwd}/>
                    </div>
                    <button className='register-button'
                            onClick={(e) => handleLogin(e)}>Submit
                    </button>
                    <button className='register-button'
                            onClick={(e) => handleChange(e, true)}>Register
                    </button>
                </form>
            </div>
        )
    }
}
export default Register;