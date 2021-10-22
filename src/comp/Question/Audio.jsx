import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {  id:"1",
       question:'Q1.How do I change the theme of the Player while listening to any song?',
       answer:{
           line1:'Yu can easily change the theme by following these steps.',
           line2:'1.Click on the Theme icon',
           line3:'2.Click on the use button',
           image1:'/images/audio/Aq1P1.png',
           image2:'/images/audio/Aq1P2.png',
           answer2:{
               line1:'1.Go to Hamburger and click on Theme button',
               line2:'2.Click on Player Theme banner.',
               image1:'/images/audio/Aq1P3.png',
               image2:'/images/audio/Aq1P4.png',
           }
       }
    },
    {    id: '2',
        question:'Q2.Is it possible to stop the playlist automatically after some time?',
        answer:{
            line1:'Yu can set the sleep timer and automatically yur playlist will be stoped.',
            line2:'Click on Sleep icon',
            image1:'/images/audio/Aq2P1.png'
        }
    },
    {   id:"3",
        question:'Q3.How can I change the sequence of songs in the playlist?',
        answer:{
            line1:'Yu can tap here and change the sequence accordingly',
            line2:'Drag the song and place where yu want.',
            image1:'/images/audio/Aq3P1.png'
        }
    },
    {   id:'4',
        question:'Q4.Why am I not able to get different themes on the player screen?',
        answer:{
            line1:'Few Themes are available but for lot more themes yu can take a premium membership and enjoy he various themes available.'
        }
    },
    {   id:'5',
        question:'Q5.Is it possible to share a song directly from the Player\'s screen?',
        answer:{
            line1:'Yes yu can share it easily with yur friends',
            line2:'1.Click on three Dot',
            line3:'2.Click Share icon',
            image1:'/images/audio/Aq5P1.png',
            image2:'/images/audio/Aq5P2.png'
        }
    },
]

const Audio = () => {
    const history=useHistory()
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container key={item.id} onClick={()=>history.push(
                      {pathname:'/audioanswer',
                      state:{question:item.question,answer:item.answer,id:item.id}})}>
                      <Questions>{item.question}</Questions>
                      <img src="/images/next.svg" alt="" width={15}/>
                  </Container>
                )
            })}
        </div>
    )
}

export default Audio
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`