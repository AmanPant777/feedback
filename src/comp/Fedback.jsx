import React,{useState} from 'react'
import styled from 'styled-components'
import FeedBackItem from './FeedBackItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Item from './Item'
import Feeds from './Feeds'


const Fedback = () => {
    const [feedback,setFeedBack]=useState(false)
    const [faq,setFaq]=useState(true)
    return (
        <Container>
            <HeaderFeedBack>
                <HeaderImage>
                    <FontAwesomeIcon icon={faArrowLeft} size={'1x'} />
                </HeaderImage>
                <HeaderTitle>Help & Feedback</HeaderTitle>
            </HeaderFeedBack>
            <FeedBack>
                <FeedBackTitle>
                    <Faq onClick={()=>{
                        setFaq(true)
                        setFeedBack(false)

                        }}>FAQ</Faq>
                    <Feed  onClick={()=>{
                         setFeedBack(true)
                               setFaq(false)
                        }}>FeedBack</Feed>
                </FeedBackTitle>
                <Border>
                    <FaqBorder active={faq}></FaqBorder>
                    <FeedBackBorder active={feedback}></FeedBackBorder>
                </Border>
                <FeedBackValue>
                    {!faq?<Feeds/>:<Item/>}
                </FeedBackValue>
            </FeedBack>
        </Container>
    )
}
export default Fedback

const Container = styled.div`
color: white;
`

const HeaderFeedBack = styled.div`
display: flex;
padding: 5px;
margin-left: 85px;
padding: 20px;
color: white;
align-items: center;
@media (max-width: 768px) {
    margin-left:0;
}
`
const HeaderImage = styled.div`
color: white;

`
const HeaderTitle = styled.h1`
font-weight: 800;
margin-left: 25px;
font-size:25px;
@media (max-width: 768px) {
    font-size: 15px;
}
`
const FeedBack = styled.div`
width: 70%;
@media (max-width: 768px) {
    width: 100%;
}
`
const FeedBackTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 90%;
margin: 20px auto;
padding: 10px;
font-size:15px;
@media (max-width: 768px) {
    font-size: 10px;
}
`

const FeedBackValue = styled.div`
width: 80%;
margin: auto;
margin-left: 80px;
padding: 1px;
margin-top: 20px;
@media (max-width: 768px) {
    margin-left: 15px;
    width: 90%;
}
`
const Faq=styled.h2`
cursor: pointer;
`
const Feed=styled.h2`
cursor: pointer;
`
const Border=styled.div`
background-color: gray;
height: 4px;
display: flex;
position: relative;
width: 85%;
margin: auto;
margin-top: -10px;
`
const FaqBorder=styled.div`
${({active})=>active&&`background-color:red;`}
height: 4px;
width:50% ;
position: absolute;
`
const FeedBackBorder=styled.div`
${({active})=>active&&`background-color:red;`}
height: 4px;
width: 50%;
position: absolute;
right: 0;
`