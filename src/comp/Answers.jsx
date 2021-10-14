import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Answers = ({location}) => {
     const {question,answer}=location.state
    const history=useHistory()
    return (
        <Container>
            <Header onClick={()=>history.push('/')}>
            <FontAwesomeIcon icon={faArrowLeft} size={60} />
            <HeaderTitle>
                   { question}
            </HeaderTitle>
            </Header>
            <Answer>
               {answer.line1}
            </Answer>
            <Border>
            </Border>
            <IconContainer>
                <IconTitle>
                    Is This  answer helpfull?
                </IconTitle>
                <Icons>
                <img src="https://cdn-icons-png.flaticon.com/512/742/742940.png" alt="" width={40} height={40}/>
                <img src="https://cdn-icons-png.flaticon.com/512/742/742774.png" alt="" width={40} height={40}/>
                </Icons>
                <IconFooter>
                    <h4>The Problem isn't solved </h4>
                    <h5 style={{color:'red',marginTop:20,}}>Send us feedback</h5>
                </IconFooter>
            </IconContainer>
        </Container>
    )
}

export default Answers

const Container=styled.div`
width: 100%;
height: 100vh;
`
const Header=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
margin: auto;
cursor: pointer;
@media (max-width:768px){
justify-content: space-around;
margin-left: 20px;
position: relative;
top: 40px;
}
`
const HeaderTitle=styled.h2`
flex: 1;
margin-left: 50px;
font-size: 30px;
@media (max-width:768px){
    font-size: 20px;
    margin-left: 10px;
}
`
const Answer=styled.h3`
width: 70%;
margin-left: 200px;
margin-right: auto;
margin-top:100px;
font-size: 20px;
@media (max-width:768px){
    width: 80%;
    margin-left: 20%;
    margin-top: 80px;
    font-size: 15px;
    overflow-x: hidden;
}
`

const Border=styled.div`
background-color: red;
height: 2px;
margin-top: 100px;
@media (max-width:768px){
    margin-top: 50px;
}
`
const IconContainer=styled.div`
margin: auto;
width: 30%;
padding: 20px;
@media (max-width:768px){
    margin-top: 50px;
    width: 100%;
    text-align: center;
}
`
    
const IconTitle=styled.h4`
font-family: sans-serif;
font-size: 20px;
align-items: center;
text-align: center;
`
    
const Icons=styled.div`
display: flex;
justify-content: space-around;
width: 90%;
padding: 20px;
align-items: center;
`
    
const IconFooter=styled.div`
padding: 40px;
margin: auto;
text-align: center;
`