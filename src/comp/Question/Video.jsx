import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const data=[
    {
       question:'Q1.Want to know about steps to download Facebook/Instagram videos?'
    },
    {
        question:'Q2.How can I save videos in my gallery from the local storage of rocks player?'
    },
    {
        question:'Q3.While watching a video, why I\'m facing a sound issue?'
    },
    {
        question:'Q4.How can I learn about gesture control in rocks player?'
    },
    {
        question:'Q5.Why there is a buffering issue in online videos?'
    },
    {
        question:'Q6.How can I minimize the video full screen?'
    },
    {
        question:'Q7.Is there any Equalizer in rocks player so that I can manage sound according to my choice?'
    },
    {
        question:'Q8.How to check the Subtitle option in rocks player?'
    },
    {
        question:'Q9.How can I play video in the background as an mp3?'
    },
    {
        question:'Q10.Is it possible to take a screenshot of any part of a video while the video is running on screen?'
    },
    {
        question:'Q.11 How to manage full screen in the popup videos?'
    },
    {
        question:'Q12.How can I turn on/off auto-rotation?'
    },
    {
        question:'Q13.Why am I not able to download youtube videos from rocks video player?'
    },
    {
        question:'Q14.Why am I failed to play the next video continuously?'
    },
    {
        question:'Q15. can I change the colour of the subtitle in the video?'
    },
    {
        question:'Q16.How can I switch from S/W to H/W   decoder while the video is running on screen?'
    },
    {
        question:'Q17.Why am I not able to manage the playback speed of the video?'
    },

]
const Video = () => {
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container>
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