import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
const data=[
    {
       question:'Q1.How to download videos/photos directly from Instagram without login?',
       answer:{
           line1:'Copy the URL of the photo/video yu want to download.',
           image1:'/images/download/Dq1P1.png',
       }
    },
    {
        question:'Q2.Why downloading speed is low sometimes?',
        answer:{
            line1:'Yu may have to check the mobile data connection speed and if the connection is strong. ',
            line2:'Then yu may reboot yur phone and start downloading again.'
        }
    },
    {
        question:'Q3.How can I create playlist of my downloaded videos/photos.',
        answer:{
            line1:'The Steps are',
            line2:'1.Click on Download.',
            line3:'Click on three dots.',
            line4:'Click on Add Playlist.',
            image1:'/images/download/Dq3P1.png',
            image2:'/images/download/Dq3P2.png',
            image3:'/images/download/Dq3P3.png',
        }
    },
    {
        question:'Q4.How can I pause or cancel the downloading?',
        answer:{
            line1:'Click on progress tab and yu can pause or cancel the download',
            image1:'/images/download/Dq4p1.png'
        }
    },
    {
        question:'Q5.Sometimes, why is it asking for a login for downloading any videos/photos?',
        answer:{
            line1:'If the video/photo yu want to download belongs to a private Instagram account.Then only in that case yu have to login to yur Instagram account.'
        }
    },
]

const Download = () => {
    const history=useHistory()
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container onClick={()=>history.push({
                      pathname:'/answer',
                      state:{question:item.question,answer:item.answer}
                  })}>
                      <Questions>{item.question}</Questions>
                      <FontAwesomeIcon icon={faArrowRight}/>
                  </Container>
                )
            })}
        </div>
    )
}

export default Download
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`