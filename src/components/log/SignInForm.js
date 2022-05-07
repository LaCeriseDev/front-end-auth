import React, {useState} from 'react'
import Axios from 'axios'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    Axios({
      method: 'post',
      url: '${process.env.REACT_APP_API_URL}api/user/login',
      withCredentials: true,
      data: {
        email,
        password,
      }
    }).then((res) => {
      if (res.data.errors) {
        emailError.innerHTML = res.data.errors.emailError
        passwordError.innerHTML = res.data.errors.passwordError
      } else {
        window.location = '/'
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return(
  <form action="" onSubmit={handleLogin} id="sign-up-form" className="container">
    <input type="email" placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} className="email" />
    <div className="email error"></div>
    <input type="password" placeholder="password" className="password" />
    <div className="password error"></div>
    <input type="submit" value="log in" className="btn-login" />
  </form>
  )
}
export default SignInForm
