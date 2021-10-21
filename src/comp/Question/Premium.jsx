import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {
       question:'Q1.How can I get premium offers for the VIP stage?',
       answer:{
           line2:"Step 1. Open the app and tap to top left corner of the Rocks Video Player",
           line3:'Click on the remove ad option as shown below in the picture.',
           image1:"/images/premium/PQ1P1.png",
           image2:"/images/premium/PQ1P2.png"
       }
    },
    {
        question:'Q2.What are the premium offers on rocks video player?',
        answer:{
            image1:"/images/premium/PQ2P1.png"
        }
    },
    {
        question:'Q3.Do you have any lifetime membership plans?',
        answer:{
            line1:'Yes, you can take benefit of lifetime membership of Rock Video Player ',
            image1:'/images/premium/PQ3P1.png'
        }
    },
    {
        question:'Q4.Will my VIP subscription will disappear automatically once i uninstall this app?',
        answer:{
            line1:'No, it will be restored Automatically once yu\'ll install the app again.'
        }
    },
]

const Premium = () => {
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
                      <img src="/images/next.svg" alt="" width={15}/>
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