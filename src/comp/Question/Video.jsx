import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {
       question:'Q1.Want to know about steps to download Facebook/Instagram videos?',
       answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q2.How can I save videos in my gallery from the local storage of rocks player?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q3.While watching a video, why I\'m facing a sound issue?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q4.How can I learn about gesture control in rocks player?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q5.Why there is a buffering issue in online videos?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q6.How can I minimize the video full screen?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q7.Is there any Equalizer in rocks player so that I can manage sound according to my choice?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q8.How to check the Subtitle option in rocks player?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q9.How can I play video in the background as an mp3?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q10.Is it possible to take a screenshot of any part of a video while the video is running on screen?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q.11 How to manage full screen in the popup videos?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q12.How can I turn on/off auto-rotation?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q13.Why am I not able to download youtube videos from rocks video player?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q14.Why am I failed to play the next video continuously?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q15. can I change the colour of the subtitle in the video?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q16.How can I switch from S/W to H/W   decoder while the video is running on screen?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },
    {
        question:'Q17.Why am I not able to manage the playback speed of the video?',
        answer:{  line1:'Yu can easily change the Theme by following this steps'}
    },

]
const Video = () => {
    const history=useHistory()
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container onClick={()=>history.push({pathname:'answer',state:{question:item.question,answer:item.answer}})}>
                      <Questions>{item.question}</Questions>
                      <FontAwesomeIcon icon={faArrowRight}/>
                  </Container>
                )
            })}
        </div>
    )
}

export default Video

const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`