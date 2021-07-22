import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Needon.kr</h1>
        <p>니드온(Needon.kr) 에 오신걸 환영합니다.</p>
    </header>
)

export default Header
