'use client'

import styled from 'styled-components'


export const Container = styled.nav`
    padding:1rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    align-items: center;
    display:flex;
    z-index: 10;

    @media screen and (max-width:768px){
        padding:.5rem 1rem;
        justify-content:space-between;
    }

`
export const Wrapper = styled.div`
display:flex;
   align-items:center;

`
export const Logo = styled.h1`
 font-size: 30px;
        font-weight: 800;
        color: orangered;
        font-family: 'Single Day', cursive;
        @media screen and (max-width:768px){
        font-size:25px;
    }
`
export const Wrap = styled.div`

`
export const Ul = styled.ul`
   margin-left: 2rem;

   @media screen and (max-width:768px){
        position:fixed;
        display:block;
        display: none;
        right:0;
        top:0;
        width:70%;
        background:white;
        height:100dvh;
    }
`
export const IconBox = styled.div`

@media screen and (min-width:768px){
        display:none;
        
    }
`

export const Times = styled.i`
 font-size: 25px;
 padding:1rem;

 @media screen and (min-width: 768px){
    display:none;
 }
`
export const List = styled.li`
   margin: 0 .7rem;
    font-size: 16px;
    @media screen and (max-width:768px){
        padding:1.2rem 1rem;
    }
`
export const Button = styled.button`
  background-color: #4E5CC4;
    padding: 1.1rem 3rem;
    color: white;
    border-radius: 8px;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0,0,0, .4);

    @media screen and (max-width:768px){
        display:none;
    }
`
export const Icon = styled.button`
    background-color: orangered;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    box-shadow: 0 0 20px 0 rgba(0,0,0, .4);
    justify-content: center;
    align-items: center;
    margin-left: 1rem;

    @media screen and (max-width:768px){
       margin:0;
    }
`
export const Box = styled.div`

@media screen and (max-width:768px){
       display:flex ;
       justify-content: center;
align-items:center;
    }
`
export const Bars = styled.i`
display:flex;
justify-content: center;
align-items:center;
font-size: 25px;
margin-left: 1rem;

`

