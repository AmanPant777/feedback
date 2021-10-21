import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icons'

const DownloadAnswer = ({location}) => {
    const {question, answer,id}=location.state
    return (
       <Container>
            {id==='1'&&(
                <InnerContainer>
                      <Question>
                       <FontAwesomeIcon icon={faArrowLeft}/>
                       <h3 style={{marginLeft:20}}>{question}</h3>
                   </Question>
                   <Answer1>{answer.line1}</Answer1>
                   <Image2 src={answer.image1}/>
                </InnerContainer>
            )}
            {id==='2'&&(
               <InnerContainer>
               <Question>
                <FontAwesomeIcon icon={faArrowLeft}/>
                <h3 style={{marginLeft:20}}>{question}</h3>
            </Question>
            <Answer1>{answer.line1}</Answer1>
            <Answer1>{answer.line2}</Answer1>
         </InnerContainer>
            )}
            {id==='3'&&(
                 <InnerContainer>
                 <Question>
                  <FontAwesomeIcon icon={faArrowLeft}/>
                  <h3 style={{marginLeft:20}}>{question}</h3>
              </Question>
              <Answer1>{answer.line1}</Answer1>
              <Answer1>{answer.line2}</Answer1>
              <Image1 src={answer.image1}/>
              <Answer1>{answer.line3}</Answer1>
              <Image1 src={answer.image2}/>
              <Answer1>{answer.line4}</Answer1>
              <Image1 src={answer.image3}/>
           </InnerContainer>
            )}
            {id==='4'&&(
                 <InnerContainer>
                 <Question>
                  <FontAwesomeIcon icon={faArrowLeft}/>
                  <h3 style={{marginLeft:20}}>{question}</h3>
              </Question>
              <Answer1>{answer.line1}</Answer1>
              <Image1 src={answer.image1}/>
           </InnerContainer>
            )}
            {id==='5'&&(
                <InnerContainer>
                <Question>
                 <FontAwesomeIcon icon={faArrowLeft}/>
                 <h3 style={{marginLeft:20}}>{question}</h3>
             </Question>
             <Answer1>{answer.line1}</Answer1>
          </InnerContainer>
            )}
           <Icon/>
       </Container>
    )
}

export default DownloadAnswer

const Container=styled.div`
width:100%;
height:100%;
color:white;
min-height: 100%;
`
const InnerContainer=styled.div`
margin-left: 4%;
height: 100%;
`
const Question=styled.div`
display: flex;
align-items: center;
padding: 20px;
margin-left: 20px;
font-size:18px;
`
const Answer1=styled.div`
margin-left:3%;
margin-top: 40px;
margin-bottom:40px;
`
const Image1=styled.img`
margin-left:200px;
height:300px;
width: 400px;
`
const Answer1Red=styled.div`
 color:red;
 font-size:20px;
 font-weight:bold;
 margin: auto;
 width:70%;
 margin-top:50px;
`
const Image2=styled.img`
margin-left:30%;
margin-top:40px;
height: 500px;
width: 350px;
object-fit: contain;
`
const Answer=styled.div`
font-size: 30px;
margin:auto;
margin-top: 40px;
width: 60%;
font-weight:bold;
`