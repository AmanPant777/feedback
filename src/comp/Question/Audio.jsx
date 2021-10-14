import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const data=[
    {
       question:'Q1.How do I change the theme of the Player while listening to any song?'
    },
    {
        question:'Q2.Is it possible to stop the playlist automatically after some time?'
    },
    {
        question:'Q3.How can I change the sequence of songs in the playlist?'
    },
    {
        question:'Q4.Why am I not able to get different themes on the player screen?'
    },
    {
        question:'Q5.Is it possible to share a song directly from the Player\'s screen?'
    },
]

const Audio = () => {
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

export default Audio
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`