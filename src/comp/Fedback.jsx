import React,{useState} from 'react'
import styled from 'styled-components'
import FeedBackItem from './FeedBackItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Item from './Item'
import Feeds from './Feeds'


const Data = [
    {
        name: 'Videos',
        image: '/images/video.png',
        q1:'Q1.Want to know about steps to download Facebook/Instagram videos? ',
        q2:'Q2.How can I save videos in my gallery from the local storage of rocks player?',
        q3:'Q3.While watching a video, why I\'m facing a sound issue?',
        q4:'Q4.How can I learn about gesture control in rocks player?',
        q5:'Q5.Why there is a buffering issue in online videos?',
        q6:'Q6.How can I minimize the video full screen?',
        q7:'Q7.Is there any Equalizer in rocks player so that I can manage sound according to my choice?',
        q8:'Q8.How to check the Subtitle option in rocks player?',
        q9:'Q9.How can I play video in the background as an mp3?',
        q10:'Q10.Is it possible to take a screenshot of any part of a video while the video is running on screen?',
        q11:'Q.11 How to manage full screen in the popup videos?',
        q12:'Q12.How can I turn on/off auto-rotation?',
        q13:'Q13.Why am I not able to download youtube videos from rocks video player?',
        q14:'Q14.Why am I failed to play the next video continuously?',
        q15:'Q15. can I change the colour of the subtitle in the video?',
        q16:'Q16.How can I switch from S/W to H/W   decoder while the video is running on screen?',
        q17:'Q17.Why am I not able to manage the playback speed of the video?',
        question:[
            'What is the purpose of this?',
            'Q17.Why am I not able to manage the playback speed of the video? '
        ]
    },
    {
        name: 'Audio',
        image: '/images/music.png',
        q1:'Q1.How do I change the theme of the Player while listening to any song?',
        q2:'Q2.Is it possible to stop the playlist automatically after some time?',
        q3:'Q3.How can I change the sequence of songs in the playlist?',
        q4:'Q4.Why am I not able to get different themes on the player screen?',
        q5:'Q5.Is it possible to share a song directly from the Player\'s screen?',
        question:[]
    },
    {
        name: 'Download Issues',
        image: '/images/download.png',
        q1:'Q1.How to download videos/photos directly from Instagram without login?',
        q2:'Q2.Why downloading speed is low sometimes?',
        q3:'Q3.How can I change the storage site of my downloaded videos/photos?',
        q4:'Q4.How can I pause or cancel the downloading?',
        q5:'Q5.Sometimes, why is it asking for a login for downloading any videos/photos?',
        question:[]
    },
    {
        name: 'Browser Issues',
        image: '/images/browser.png',
        q1:'What is the trusted browser',
        question:[]
    },
    {
        name: 'Premium',
        image: '/images/vip.png',
        q1:'Q1.How can I get premium offers for the VIP stage?',
        q2:'Q2.What are the premium offers on rocks video player?',
        q3:'Q3.Do you have any lifetime membership plans?',
        q4:'Q4.Will my VIP subscription will disappear automatically once i uninstall this app?',
        question:[]
    },
    {
        name: 'Others',
        image: '/images/others.png',
         q1:'Help ?',
         question:[]
    }
]


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
height: 100%;
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