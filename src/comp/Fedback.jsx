import React,{useState} from 'react'
import styled from 'styled-components'
import FeedBackItem from './FeedBackItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Item from './Item'
import Feeds from './Feeds'


const Fedback = () => {
    const [feedback,setFeedBack]=useState(false)
    const [faq,setFaq]=useState(false)
    return (
        <Container>
            <HeaderFeedBack>
                <HeaderImage>
                    <FontAwesomeIcon icon={faArrowLeft} size={'2x'} />
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
                    {faq?<Item/>:<Feeds/>}
                </FeedBackValue>
            </FeedBack>
        </Container>
    )
}
export default Fedback

const Container = styled.div`
color: white;
height: 80%;
`

const HeaderFeedBack = styled.div`
display: flex;
padding: 5px;
margin-left: 20px;
color: white;
align-items: center;
`
const HeaderImage = styled.div`
color: white;

`
const HeaderTitle = styled.h1`
font-weight: 800;
margin-left: 30px;

`
const FeedBack = styled.div`

`
const FeedBackTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 90%;
margin: 20px auto;
padding: 10px;
`

const FeedBackValue = styled.div`
width: 96%;
margin: auto;
margin-left: 20px;
padding: 10px;
margin-top: 20px;
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