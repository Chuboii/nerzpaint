'use client'
import styled from "styled-components"

export const Container = styled.section`
 position: fixed;
 inset:0;
 z-index: 10;

`
export const Icon = styled.i`
  position: fixed;
  top: 1rem;
  left:1rem;
  font-size:30px;

`
export const ImageBox = styled.div`
  position: absolute;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
`
export const DarkBg = styled.div`
      position:fixed;
  inset:0;
  z-index:1;
  background:rgba(0,0,0,.8);
  overflow: hidden;
`