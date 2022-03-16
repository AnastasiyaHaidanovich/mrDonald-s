import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import loginImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    color: white;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    justify-content: space-between;
    font-size: 16px;
    height: 54px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 14px;
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 30px;
    margin-right: 20px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
    /*jshint ignore: start*/ 
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo' />
            <H1>MrDonald's</H1>
        </Logo>
        {authentication ? 
            <User>
                <figure>
                    <img src={loginImg} alt={authentication.displayName} />
                    <figcaption>{authentication.displayName}</figcaption>
                </figure>
                <LogOut title="Выйти" onClick={logOut}>x</LogOut>   
            </User> 
            : 
            <Login onClick={logIn}>
                <figure>
                    <img src={loginImg} alt="login icon" />
                    <figcaption>Войти</figcaption>
                </figure>
            </Login>}
    </NavBarStyled>
      /*jshint ignore:  end*/ 
);