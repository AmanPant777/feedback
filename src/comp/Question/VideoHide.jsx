import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
const data=[
    {
       question:'Q1.How can I hide my private videos in rocks player?',
       answer:{
           line2:'1.Click on three dots.',
           line3:'2.Click on Lock icon.',
           image1:'/images/videohider/vhiQ1P1.png',
           image2:'/images/videohider/vhiQ1P2.png'
       }
    },
    {
        question:'Q2.Why is it necessary to add an email id?',
        answer:{  line1:'We ask yu to add gmail id so that it can help yu to recover yur Pin in case yu forgot the pin of yur private folder yu can easily recover from this email id.',
                image1:'/images/videohider/vhiQ2P1.png'
    }
    },
    {
        question:'Q3.Want to change the pin in case of forgetting the pin?',
        answer:{  line1:'Yu can tap to forget pin option and there yu have to enter id yu have mentioned while creating the pin.And then yur pin will be recoverd easily. ',
                line2:'1.Click on Forget Pin .',
                line3:'Enter yur recovery email.',
                image1:'/images/videohider/vhiQ3P1.png',
                image2:'/images/videohider/vhiQ3P2.png'
    }
    },
    {
        question:'Q4.How to unlock the video placed in a private folder?',
        answer:{
            line2:'1.Click on Lock folder icon.',
            line3:'2.Enter yur PIN',
            line4:'3.Click on three Dot',
            line5:'4.Click on Unlock icon',
            image1:'/images/videohider/vhiQ4P1.png',
            image2:'/images/videohider/vhiQ4P2.png',
            image3:'/images/videohider/vhiQ4P3-2.png',
            image4:'/images/videohider/vhiQ4P3.png'
        }
    },
]

const VideoHide = () => {
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

export default VideoHide
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`