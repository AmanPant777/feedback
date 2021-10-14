import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const data=[
    {
       question:'Q1.How to download videos/photos directly from Instagram without login?'
    },
    {
        question:'Q2.Why downloading speed is low sometimes?'
    },
    {
        question:'Q3.How can I change the storage site of my downloaded videos/photos?'
    },
    {
        question:'Q4.How can I pause or cancel the downloading?'
    },
    {
        question:'Q5.Sometimes, why is it asking for a login for downloading any videos/photos?'
    },
]

const Download = () => {
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

export default Download
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`