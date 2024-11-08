import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useStore } from '../store';


const initialFormData = {
  username: '',
  email: '',
  password: '',
  error_message: ''
}

function AuthForm(propsObj: { isLogin: boolean }) {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const store = useStore();

  if (!store) {
    throw new Error("Store is not available");
  }

  const { setState } = store;

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // console.log(event);
    event.preventDefault();

    // console.log(event);

    const url = propsObj.isLogin ? '/auth/login' : '/auth/register';

    // console.log(url);
    try {
      const res = await axios.post(url, formData)

      if (res.status === 200) {
        setState((oldState: any) => ({
          ...oldState,
          user: res.data.user
        }));

        navigate('/');
      }
    } catch (error: any) {

      setFormData(oldFormData => ({
        ...oldFormData,
        // This is the property on the formData above
        error_message: error.response.data.message
      }));
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(oldFormData => ({
      ...oldFormData,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <section className="row login-bg">
      <div className="white-bg">
        <form onSubmit={handleSubmit} className="col-4 mx-auto">
          <h2 className="text-center">{propsObj.isLogin ? 'Sign In' : 'Sign Up'}</h2>

          {formData.error_message && <p className="text-danger text-center">{formData.error_message}</p>}

          {!propsObj.isLogin && (
            <>
              <div className="mb-3">
                <label htmlFor="first-name-input" className="form-label">Username</label>
                <input onChange={handleInputChange} value={formData.username} name="username" type="text" className="form-control" id="first-name-input" required />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="email-input" className="form-label">Email Address</label>
            <input onChange={handleInputChange} value={formData.email} name="email" type="email" className="form-control" id="email-input" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password-input" className="form-label">Password</label>
            <input onChange={handleInputChange} value={formData.password} name="password" type="password" className="form-control" id="password-input" autoComplete="on" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary full-width">Submit</button>

            {propsObj.isLogin ? (
              <NavLink className="text-center mt-3" to="/register">Haven't signed up? Click Here!</NavLink>
            ) : (
              <NavLink className="text-center mt-3" to="/login">Already signed up? Click Here!</NavLink>
            )}
          </div>

        </form>
      </div>
    </section>
  )
}

export default AuthForm;