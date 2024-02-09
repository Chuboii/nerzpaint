'use client'

import styled from "styled-components"

type DisplayProp = {
    display: string;
}
export const Container = styled.div<DisplayProp>`
 background: orangered;
 width: 50px;
 height:50px;
 display: flex;
 justify-content: center; 
 align-items:center;
 position:fixed;
 bottom:1rem;
 z-index:20;
 cursor: pointer;
 right:1rem;
 color:white;
 display:${({display}) => display};
 border-radius:50%;
`

export const Icon = styled.div`
 font-size: 30px;

`