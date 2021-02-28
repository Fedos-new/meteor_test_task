import React from 'react'
import logo from '../../assets/logo.svg'
import style from './SplashScreen.module.css'


export const SplashScreen = () => {
    return (
        <div className={style.splashWrap}>
            <img src={logo} alt="Loading..."  className={style.logo}/>
        </div>
    )
}
