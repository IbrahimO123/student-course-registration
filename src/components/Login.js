import React, {useState} from 'react'
import FutaLogo from '../Images/Logo/futaLogo.png'
import bg1 from '../Images/bg/10.jpg'
import bg2 from '../Images/bg/12.jpg'
import bg3 from '../Images/bg/15.jpg'

function Login() {
    const [matricNo, setMatricNo] = useState('');
    const [password, setPassword] = useState('');
    const changeType= () => {
        let pass = document.getElementById("password");
         if (pass.type === "password"){
             pass.type = "text"
         }
         else{
             pass.type="password"
         }
         
    }//............changing the paasword type (function)
    const changeMatricNo = (e) => {setMatricNo(e.target.value)}
    const changePassword = (e) => {setPassword(e.target.value)}
    const submitForm = (e) => {
        alert(`Your Matric No is: ${matricNo}  While Your Password is: ${password} `);
        e.preventDefault();
    }

    function ChangingBackground() {
            let bgImage = document.querySelector('#body');
            const Images = [
               `url(${bg1})`,
               `url(${bg2})`,
               `url(${bg3})`,
            ]
            const changingImages = Images[Math.floor(Math.random() * (Images.length) )];
            bgImage.style.backgroundImage = changingImages
            
       //     var images = [];
       //     var i = 0
       //         //changing time
       //     var time = 10000
       //         //Images path to change
       //     images[0] = pic1;
       //     images[1] = pic2;
       //     images[2] = pic3;
   
   
        } 
     setInterval(ChangingBackground,10000)
    return (
        <div className="container-fluid mx-auto mt-5">
            <div className="container py-3 bg-light" id="container">
            <form onSubmit={submitForm} >
            <div className="text-center">
                <img className="img img-fluid" src={FutaLogo} alt="FUTA Logo"></img>
            </div>
            <div className="h4 text-center border-bottom pb-2 mb-3">
                Student's Login
            </div>
                <div className="form-group pb-2">
                    <label className="form-control-label" htmlFor="matric">Your Matric Number:</label>
                    <input className="form-control" name="matric_no" value={matricNo} onChange={(e) => changeMatricNo(e)}  autoComplete={matricNo} autoFocus required type='text' placeholder="Matric number" tabIndex="1" ></input>
                </div>
                <div className="form-group pb-2">
                    <label className="form-control-label" htmlFor="password" >Password:</label>
                    <input type='password' value={password} name="password" onChange={(e) => changePassword(e)} autoComplete={password} className="form-control" required  id="password" placeholder="Your password" tabIndex="2" ></input>
                    <input className="show d-inline" onClick={changeType} type="checkbox" name="show" id="toggle"></input>
                    <span  className="d-inline show-text">Show password</span>
                </div>
                    
                <div>
                    <button className="btn btn-primary btn-block" name="submit_button" type="submit">Login</button>
                    <p className="text-right">
                        <a href="###" className="text-decoration-none" >Forgot Password?</a>
                    </p>
                </div>
                <div>
                    New Student ? <a href="##" className="text-decoration-none" >Click Here</a>
                </div>
               </form>
              
            </div>
               <div id="foot" className="text-info font-weight-lighter w-25 border-top pt-2 mx-auto my-2 text-center">
                   2021 &copy; FUTA Integrated Registration And Result System (FIRARS) 
               </div>
        </div>
    )
}

export default Login
