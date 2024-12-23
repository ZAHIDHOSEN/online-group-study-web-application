import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const {loginUser,  signInWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('in login Page',location);
    const form = location.state || '/';
    
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result =>{
            console.log('sign in', result.user);
           navigate(form) 
        })
        .catch(error =>{
            console.log(error);
        } )

     
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(error =>{
          console.log(error.message);  
        })
    }

        
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
       
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className=" ml-2 mt-2 text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <p>You are new user.please <Link className='text-red-500' to='/register'>Register</Link></p>
             
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button onClick={handleGoogleSignIn} className="btn"><FaGoogle/> Login With Google</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;