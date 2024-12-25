import React, { useContext, useState } from 'react';
import AuthContext from '../../../provider/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const formdata = {name,email,photo,password};
        console.log(email,password);


        // password validation
        setErrorMessage('')
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!passwordPattern.test(password)){
            setErrorMessage('At least one Uppercase, One lowerCase,and not less than 6')
            return;

        } 
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);

        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
       
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-5xl font-bold">Register here</h1>
           
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name='photo' placeholder="Photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                <p>please login here <Link className='text-red-500' to='/login'>Login</Link></p>
                </label>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;