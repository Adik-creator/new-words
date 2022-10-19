import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";

export const lightTheme = {
    body: '#FFF',
    text: '#FAFAFA',
    toggleBorder: '#ffffff',
    background: '#393E46',
    backgroundPrimary: '#222831',  //'linear-gradient(261.95deg, #4e6aea -18.21%, #7C2BFD 120.86%)'
}
export const darkTheme = {
    body: '#363537',
    text: '#2c2828',
    toggleBorder: '#58789d',
    background: '#999',
    backgroundPrimary: '#AAB8B6',
}

export const StyleHeader = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1600px;
  background: ${({theme}) => theme.backgroundPrimary};
  border-radius: 10px;
`
export const StyleFooter = styled.div`
  margin-top: 20px;
  padding: 15px 0;
  background: ${({theme}) => theme.backgroundPrimary};
  max-width: 1600px;
  width: 100%;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin: 5px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: ${({theme}) => theme.text};
  border-radius: 10px;
  display: block;
  border: 0;
  font-weight: 700;
  box-shadow: 0 0 14px -7px #f09819;
  background: ${({theme}) => theme.backgroundPrimary};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover{
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  &:active {
    transform: scale(0.95);
  }
`

export const DarkModeButton = styled.div`
  margin: 5px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: ${({theme}) => theme.text};
  border-radius: 10px;
  display: block;
  border: 0;
  font-weight: 700;
  box-shadow: 0 0 14px -7px #f09819;
  background: ${({theme}) => theme.backgroundPrimary};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover{
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  &:active {
    transform: scale(0.95);
  }
`


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
