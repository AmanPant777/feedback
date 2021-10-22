import React from 'react'
import styled from 'styled-components'
const Icon = () => {
    return (
        <IconContainer>
                <IconTitle>
                    Is this  answer helpfull ?
                </IconTitle>
                <Icons>
                    <IconImage src='/images/happy.svg'/>
                    <IconImage src='/images/sad.svg'/>

                </Icons>
                <IconFooter>
                    <h4>The Problem isn't solved </h4>
                    <h3 style={{color:'red',marginTop:20,}}>Send us feedback</h3>
                </IconFooter>
            </IconContainer>
    )
}

export default Icon

const IconContainer=styled.div`
margin: auto;
width: 100%;
padding: 20px;
border-top: 2px solid red;
margin-top: 100px;
@media (max-width:768px){
    margin-top: 5px;
    width: 90%;
    text-align: center;
    margin-left: 0px;
}
`
const IconTitle=styled.h4`
font-family: sans-serif;
font-size: 30px;
margin-top:30px;
align-items: center;
text-align: center;
@media (max-width:768px){
    font-size: 25px;
}
`
    
const Icons=styled.div`
display: flex;
justify-content: space-around;
width: 30%;
padding: 20px;
margin: auto;
margin-top: 20px;
align-items: center;
@media (max-width:768px){
    margin-top: 10px;
    justify-content: space-between;
    width: 50%;
}
`
const IconFooter=styled.div`
padding: 20px;
margin: auto;
text-align: center;
`
const IconImage=styled.img`
width: 100px;
height: 100px;
@media (max-width:768px){
    width: 50px;
    height: 50px;
}
`