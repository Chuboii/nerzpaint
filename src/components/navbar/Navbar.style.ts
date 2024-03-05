'use client'

import styled from 'styled-components'

type ContainerType = {
    bg: string;
}

type UlType = {
    position: string;
}

export const Container = styled.nav<ContainerType>`
    padding:1rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({bg}) => bg};
    align-items: center;
    display:flex;
    z-index: 9;

    @media screen and (max-width:1028px){
        padding:.5rem 1rem;
        overflow: hidden;
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
        font-family: '';
        @media screen and (max-width:1100px){
        font-size:25px;
    }
`
export const Wrap = styled.div`

`
export const UlDesktop = styled.ul<UlType>`
   margin-left: 2rem;
    transition:all 1s;
   position:relative;

   @media screen and (max-width:1028px){
        position:fixed;
        overflow: hidden;
        display:none;
        right:${({position}) => position};
        top:0;
        max-width:300px;
        background:white;
        width:100%;
        bottom:0;
    }
`

export const UlMobile = styled.ul<UlType>`
  display:none;
   @media screen and (max-width:1028px){
        position:fixed;
                overflow: hidden;
        display:block;
        right:${({position}) => position};
        top:0;
       
        max-width:300px;
        background:white;
        width:100%;
        bottom:0;
    }
`
export const IconBox = styled.div`


@media screen and (min-width:1028px){
        display:none;
        
    }
`

export const Times = styled.i`
 font-size: 28px;
 padding:1rem 1.5rem ;
 background:red;
 color:white;
 margin-bottom:2rem;
 cursor:pointer;
 @media screen and (min-width: 768px){
    display:none;
 }
`
export const List = styled.li`
   margin: 0 .7rem;
    font-size: 16px;
    transition:all .2s;

    &:last-child{
        display:none;
    }
    &:hover{
        border-bottom:2px solid orangered;
    }
    @media screen and (max-width:1100px){
        padding:1.2rem 1rem;
        &:last-child{
        display:block;
    }
        &:hover{
            border:none;
        border-left:4px solid orangered;
    }
    }
`
export const Button = styled.button`
  background-color: #4E5CC4;
    padding: 1.1rem 3rem;
    color: white;
    border-radius: 8px;
    border-radius: 10px;
    transition:all .5s;
    box-shadow: 0 0 20px 0 rgba(0,0,0, .4);

    @media screen and (max-width:768px){
        display:none;
    }

    &:hover{
        background: white;
        color: #4E5CC4;
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
       margin-right: .5rem;
    }
`
export const Box = styled.div`

@media screen and (max-width:1028px){
       display:flex ;
       justify-content: center;
align-items:center;
    }
`
export const Bars = styled.i`
display:flex;
justify-content: center;
align-items:center;
font-size: 30px;
margin-left: 1rem;


`

