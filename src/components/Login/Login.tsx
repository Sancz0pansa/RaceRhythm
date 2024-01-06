/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useRef, useEffect, useState } from 'react'
import './sass/Login.scss';
import axios from 'axios';


export const Login = ({lang, loginVisible, setUsername, setLoggedin, setLoginVisible}) => {
    const [registerMode, setRegisterMode] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    let timer;

   
    useEffect(() => {
      return clearTimeout(timer);
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      switch(registerMode){
        case true:
          axios.post('http://localhost:3000/users/new', { login, password, email })
  .then((response) => {
    console.log(response.data);
    setEmail('');
    setLogin('');
    setPassword('');
  })
  .catch(error => {
    console.error(error);
  });
          break;
        case false:
          axios.post('http://localhost:3000/users', { login, password })
  .then((response) => {
    console.log(response.data);
    if(response.status === 200) {
      setUsername(login);
      setLogin('');
      setPassword('');
      setLoginVisible(false);
      setLoggedin(true);
    } 
    
    
  })
  .catch(error => {
    setShowError(true);
      timer = setTimeout(()=> {
        setShowError(false);
      }, 3000)
    console.error(error);
  });
          break;
      }
    }

  return (
    
    <div className={`login-container ${loginVisible && 'visible'}`}>
        <div className='login-container__triangle'></div>
        <form className='login-container__form' onSubmit={(e) => submit(e)}>
            <label htmlFor="login">Login:</label>
            <input className='login-container__form--text' name='login' type="text" value={login} onChange={(e) => setLogin(e.target.value)} required/>
            <label htmlFor="password">{lang === 'PL' ? 'Hasło:' : 'Password:'}
            </label>
            <input className='login-container__form--text' name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <p className='login-container__form--p-red'>{showError && (lang === 'PL' ? 'Nie prawidłowy login lub hasło' : 'Invalid login or password')}</p>
            
            {registerMode && <><label htmlFor="password">E-mail:
            </label>
            <input className='login-container__form--text' name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/></>}
            <input className='login-container__form--submit' type="submit" value={lang === 'PL' ? registerMode === false ? 'Zaloguj się' : 'Zarejestruj się' : registerMode === true ? 'Register' : 'Login'} />
            <p className='login-container__form--p'>{lang === 'PL' ? <>{registerMode ? 'Masz już Konto ? ' : 'Nie masz jeszcze konta ? '}{<a onClick={()=> setRegisterMode(!registerMode)}>{registerMode ? lang === 'PL' ? 'Zaloguj się' : 'Login' : lang === 'PL' ? 'Zarejestruj się' : 'Register'}</a>}{registerMode ? ' 🏃🏻‍♂️' : ' aby śledzić swój progres ! 🏃🏻‍♂️'}</> : <>{registerMode ? 'Already have account ? ' : `Don't have account yet ? `}{<a onClick={()=> setRegisterMode(!registerMode)}>{registerMode ? 'Login' : 'Register'}</a>}{registerMode ? ' 🏃🏻‍♂️' : ` to track your progress !🏃🏻‍♂️`}</>}</p>
        </form>
    </div>
  )
}