import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Answers = ({location}) => {
     const {question,answer}=location.state
     console.log(answer)
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
               {answer?.line1}
            </Answer>
            <Answer>
               {answer?.line2}
            </Answer>
            {answer?.image1&&  <Image src={answer?.image1}/> }

            {answer.line3&& <Answer>
               {answer?.line3}
            </Answer> }
           
            {answer?.image2&&<Image src={answer?.image2}/>}
            
            
            {answer.line4&&   <Answer>
                {answer?.line4}
            </Answer>}
          
            {answer?.image3&&<Image src={answer?.image3}/>}
            {answer?.answer2&&(
                 <Or>
                     <Answer>
                         {answer?.answer2.line1}
                     </Answer>
                     <Image src={answer?.answer2.image1}/>
                     <Answer>
                         {answer?.answer2.line2}
                     </Answer>
                     <Image src={answer?.answer2.image2}/>
                 </Or>
             )}
             <Answer>
                {answer.line5&&answer.line5}
            </Answer>
            {answer?.image4&&<Image src={answer?.image4}/>}
            <Border>
            </Border>
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
                    <h4 style={{color:'red',marginTop:20,}}>Send us feedback</h4>
                </IconFooter>
            </IconContainer>
        </Container>
    )
}
export default Answers
const Container=styled.div`
width: 100%;
height: 100%;
min-height: 100vh;

`
const Header=styled.div`
display: flex;
align-items: baseline;
justify-content: center;
width: 95%;
margin: auto;
cursor: pointer;
top: 20px;
position: relative;
@media (max-width:768px){
justify-content: space-around;
margin-left: 10px;
position: relative;
top: 40px;
width: 70%;
}
`
const HeaderTitle=styled.h2`
flex: 1;
margin-left: 50px;
font-size: 20px;
@media (max-width:768px){
    font-size: 15px;
    margin-left: 10px;
    width: 100vw;
}
`
const Answer=styled.h3`
width: 70%;
margin-left: 35px;
margin-right: auto;
margin-top:100px;
font-size: 20px;
@media (max-width:768px){
    width: 60%;
    margin-left: 10%;
    margin-top: 80px;
    font-size: 10px;
    overflow-x: hidden;
}
`

const Border=styled.div`
background-color: red;
height: 2px;
margin-top: 100px;
@media (max-width:768px){
    margin-top: 1px;
}
`
const IconContainer=styled.div`
margin: auto;
width: 30%;
padding: 20px;
@media (max-width:768px){
    margin-top: 5px;
    width: 200px;
    text-align: center;
    margin-left: 20px;
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
padding: 20px;
margin: auto;
text-align: center;
`
const Image=styled.img`
width: 50%;
margin-top: 20px;
margin-left: 250px;
object-fit: contain;
padding: 20px;
margin-top: 70px;
@media (max-width:768px){
   margin-left: 10%;
   background-position: center;
   object-fit: contain;
}
`
const Or=styled.div`

`
const IconImage=styled.img`
width: 100px;
height: 100px;
@media (max-width:768px){
    width: 50px;
    height: 50px;
}
`