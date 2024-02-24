'use client'
import styled from "styled-components";

export const FooterContainer = styled.footer`
color:#eee;
background-color: black;
font-size: 13px;
position: relative;
bottom:0;
margin-top: 5rem;
left: 0;
right: 0;
`
export const Header = styled.header`
background-color: #313133;
display: flex;
padding: 1.4rem 4rem;
@media screen and (max-width:768px){
  display: block;
  padding: 1rem;
}
`
export const LinkWrap = styled.div`
display: flex;
flex-direction: column;

`
export const IconBox = styled.div`
  width: 50px;
  height:50px;
  margin-right: .5rem;
  border-radius: 50%; 
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid orangered;
  cursor: pointer;
  transition: all .5s;
  &:hover{
    background-color: orangered;
  }
`
export const Icons = styled.i`
  font-size: 14px;
  
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Text = styled.p`
font-weight: 700;
margin: .7rem 0;
`
export const Logo = styled.div`
margin-right: 4rem;
font-family: 'Bungee Spice', sans-serif;
  font-size:25px;
`
export const Ul = styled.ul`

`
export const Li = styled.li`

`
export const Button = styled.button`
background-color: orangered;
color: white;
margin-left:.5rem;
padding:.5rem;
border-radius: 5px;
`
export const Input = styled.input`
padding:.7rem 1rem;
width: 80%;
border-radius: 5px;
border: 1px solid;
color:black;
`
export const Form = styled.form`
width:100%;
display: flex;
`
export const Nav = styled.nav`
 padding: 1rem 6rem;
 display: flex;
 flex-wrap: wrap;
justify-content: space-between;

@media screen and (max-width:768px){
 display: grid;
 grid-template-columns: 1fr 1fr;
 padding: .3rem 1rem;
}
`
export const Wrap = styled.div`
@media screen and (max-width:768px){
  display: block;
}
`