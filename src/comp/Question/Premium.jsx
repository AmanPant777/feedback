import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const data=[
    {
       question:'Q1.How can I get premium offers for the VIP stage?'
    },
    {
        question:'Q2.What are the premium offers on rocks video player?'
    },
    {
        question:'Q3.Do you have any lifetime membership plans?'
    },
    {
        question:'Q4.Will my VIP subscription will disappear automatically once i uninstall this app?'
    },
]

const Premium = () => {
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

export default Premium
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`