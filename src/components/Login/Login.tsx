/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useRef, useEffect, useState } from 'react'
import './sass/Login.scss';


export const Login = ({lang, loginVisible}) => {
    const [registerMode, setRegisterMode] = useState<boolean>(false);

  return (
    
    <div className={`login-container ${loginVisible && 'visible'}`}>
        <div className='login-container__triangle'></div>
        <form className='login-container__form'>
            <label htmlFor="login">Login:</label>
            <input className='login-container__form--text' name='login' type="text" />
            <label htmlFor="password">{lang === 'PL' ? 'Hasło:' : 'Password:'}
            </label>
            <input className='login-container__form--text' name='password' type="password" />
            {registerMode && <><label htmlFor="password">E-mail:
            </label>
            <input className='login-container__form--text' name='email' type="email" /></>}
            <input className='login-container__form--submit' type="submit" value={lang === 'PL' ? registerMode === false ? 'Zaloguj się' : 'Zarejestruj się' : registerMode === true ? 'Register' : 'Login'} />
            <p className='login-container__form--p'>{lang === 'PL' ? <>{registerMode ? 'Masz już Konto ? ' : 'Nie masz jeszcze konta ? '}{<a onClick={()=> setRegisterMode(!registerMode)}>{registerMode ? lang === 'PL' ? 'Zaloguj się' : 'Login' : lang === 'PL' ? 'Zarejestruj się' : 'Register'}</a>}{registerMode ? ' 🏃🏻‍♂️' : ' aby śledzić swój progres ! 🏃🏻‍♂️'}</> : <>{registerMode ? 'Already have account ? ' : `Don't have account yet ? `}{<a onClick={()=> setRegisterMode(!registerMode)}>{registerMode ? 'Login' : 'Register'}</a>}{registerMode ? ' 🏃🏻‍♂️' : ` to track your progress !🏃🏻‍♂️`}</>}</p>
        </form>
    </div>
  )
}