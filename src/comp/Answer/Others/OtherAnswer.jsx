import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'
import Icon from '../Icons'

const OtherAnswer = ({location}) => {
    const {question,answer,id}=location.state
    const history = useHistory()
    return (
       <Container>
         {id==='1'&& 
         (
             <InnerContainer>
                 <Question  onClick={()=>history.push('/')}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <h3 style={{marginLeft:20}}>{question}</h3>
                 </Question>
                 <Answer1>
                     {answer.line1}
                 </Answer1>
                 <Answer2>
                   {answer.line2}
                 </Answer2>
                 <Answer2 oneAnswer={true}>
                    {answer.line3}
                 </Answer2>
             </InnerContainer>
         )
         }



         {id==="2"&&(
             <InnerContainer >
              <Question onClick={()=>history.push('/')}>
              <FontAwesomeIcon icon={faArrowLeft}/>
              <h3 style={{marginLeft:20}}>{question}</h3>
           </Question>
              <Answer3>
                  {answer.line1}
              </Answer3>
              <Image1 src='/images/others/OQ2P1.png'/>
              <Answer3>
                  {answer.line2}
              </Answer3>
              <Image1 src='/images/others/OQ2P2.png'/>
             </InnerContainer>
            
         )}
         {
             id==="3"&&(
               <InnerContainer >
                 <Question onClick={()=>history.push('/')}>
                 <FontAwesomeIcon icon={faArrowLeft}/>
                 <h3 style={{marginLeft:20}}>{question}</h3>
              </Question>
              <Answer2>
              {answer.line1}
              </Answer2>
              <Answer3>
                  {answer.line2}
              </Answer3>
              <Image1 src='/images/others/OQ3P1.png'/>
              <Answer3>
                  {answer.line3}
              </Answer3>
              <Image2 src='/images/others/OQ3P2.png'/>
              <Answer3>
                  {answer.line4}
              </Answer3>
              <Image2 src='/images/others/OQ3P3.png'/>
               </InnerContainer>
             )
         }
          {
              id==='4'&&(
                  <InnerContainer >
                       <Question onClick={()=>history.push('/')}>
                         <FontAwesomeIcon icon={faArrowLeft}/>
                        <h3 style={{marginLeft:20}}>{question}</h3>
                       </Question>
                       <Answer4>
                           {answer.line1}
                       </Answer4>
                  </InnerContainer>

              )
          }
          {
              id==='5'&&(
                  <InnerContainer >
                      <Question onClick={()=>history.push('/')}>
                         <FontAwesomeIcon icon={faArrowLeft}/>
                        <h3 style={{marginLeft:20}}>{question}</h3>
                       </Question>
                       <Answer3 >
                           {answer.line1}
                       </Answer3>
                       <Image1 src='/images/others/OQ5P1.png'/>
                       <h2  style={{margin:'auto',width:'80%',marginTop:60,fontWeight:'bold',textAlign:'center'}}>{answer.line2}</h2>
                  </InnerContainer>
              )
          }
          <Icon/>
       </Container>
    )
}
export default OtherAnswer

const Container=styled.div`
height:100%;
width: 100%;
`
const InnerContainer=styled.div`
margin-left: 4%;
`
const Question=styled.div`
display: flex;
align-items: baseline;
padding: 20px;
margin-left: 20px;
font-size:18px;
@media (max-width:768px){
   font-size:15px;
   margin-left: 0;
}
`
const Answer1=styled.div`
font-size: 20px;
width: 50%;
margin-top:100px;
margin-left:40px;
@media (max-width:768px){
   margin-bottom: -10px;
   margin-bottom: ${props=>props.oneAnswer?'40px':'-10px'};
}
`
const Answer2=styled(Answer1)`
margin-top: 40px;
color: white;
font-size:23px;
width: 80%;
@media (max-width:768px){
    margin-bottom:${props=>props.oneAnswer?'40px':'10px'}
}
`

const IconContainer=styled.div`
margin: auto;
width: 100%;
padding: 20px;
border-top: 2px solid red;
margin-top: 100px;
@media (max-width:768px){
    margin-top: 5px;
    width: 200px;
    text-align: center;
    margin-left: 20px;
}
`
const IconTitle=styled.h4`
font-family: sans-serif;
font-size: 30px;
margin-top:30px;
align-items: center;
text-align: center;
`
    
const Icons=styled.div`
display: flex;
justify-content: space-around;
width: 30%;
padding: 20px;
margin: auto;
margin-top: 20px;
align-items: center;
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
const Answer3=styled.div`
font-size: 20px;
margin-top: 60px;
margin-left: 40px;
@media (max-width:768px){
   margin-bottom: -10px;
   margin-bottom: ${props=>props.oneAnswer?'40px':'-10px'};
   margin-left: 10px;
}
`
const Image1=styled.img`
margin: auto;
margin-left: 20%;
margin-top: 40px;
margin-bottom: 50px;
height:277px;
width:373px;
@media (max-width:768px){
   margin-left: 5%;
   width: 300px;
   height: 400px;
   object-fit: contain;
   margin-top: 0;
}
`

const Answer4=styled.div`
font-size: 30px;
width:80%;
margin: auto;
margin-top:70px;
text-align: center;
font-weight: bold;
@media (max-width:768px){
    font-size:20px;

}
`
const Image2=styled.img`
margin: auto;
margin-left: 20%;
margin-top: 40px;
margin-bottom: 50px;
height:210.5px;
width:373px;
@media (max-width:768px){
   margin-left: 5%;
   width: 300px;
   height: 400px;
   object-fit: contain;
   margin-top: 0;
}
`