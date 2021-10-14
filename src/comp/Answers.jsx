import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Answers = ({location}) => {
    // const answer=location.state
    const history=useHistory()
    return (
        <Container>
            <Header onClick={()=>history.push('/')}>
            <FontAwesomeIcon icon={faArrowLeft} size={60} />
            <HeaderTitle>
            How can i Save Videos in my Gallery from the local storage of rocks player?
            </HeaderTitle>
            </Header>
            <Answer>
                Whatever the videos yu have downlaoded from Rocks Video Player will be save automatically on yur phone gallery.
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
min-height: 100vh;
width: 100%;
`
const Header=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
margin: auto;
cursor: pointer;
`
const HeaderTitle=styled.h2`
flex: 1;
margin-left: 50px;
font-size: 30px;
`
const Answer=styled.h3`
width: 70%;
margin-left: 200px;
margin-right: auto;
margin-top:100px;
font-size: 20px;
`

const Border=styled.div`
background-color: red;
height: 2px;
margin-top: 100px;
`
const IconContainer=styled.div`
margin: auto;
width: 30%;
padding: 20px;

`
    
const IconTitle=styled.h4`
font-family: sans-serif;
font-size: 20px;
`
    
const Icons=styled.div`
display: flex;
justify-content: space-around;
width: 50%;
padding: 10px;
align-items: center;
`
    
const IconFooter=styled.div`
padding: 20px;
margin: auto;
`