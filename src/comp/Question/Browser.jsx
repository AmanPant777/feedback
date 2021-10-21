import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {
       question:'Q1.Why I am not able to open the page\'s link in the rocks video player\'s browser?',
       answer:{
           line1:"Yu can refresh the site and please copy the link and paste it into another browser to check if it can open.If not the page may be block or the link is wrong.In that case yu can contact the website owner",
           line2:'If these is not the issue than by these ways.',
           line3:"1.Clear Data and Cache.",
           line4:"2.Check yur mobile network speed or try onother wifi network .If the problem is not solved please send us feedback"
       }
    },
    {
        question:'Q2.Why does browser speed seems to be slow?',
        answer:{
            line1:'Yu may clear the cache and data of yur rocks video player.Then again copy the URl and paste it into the browser and still yu find any issue kindly check yur mobile network.'
        }
    },
    {
        question:'Q3.How can i share links directly from the browser?',
        answer:{
            line2:'1.Tap the three dots on the top right corner of the screen as shown below. ',
            line3:"2.Click on share link option as shown in the picture and now share through the selected app as shown below.",
            image1:'/images/browser/BIQ3P1.png',
            image2:"/images/browser/BIQ3P2.png"
        }
    },
    {
        question:'Q4.How to add a new tab if we still want to keep the previous data on the browser window?',
        answer:{
            line2:'Click to the top right corner of the screen and tab to new tab option as shown below.',
            line3:"Paste the URL of the data yu want to search or open it in the browser.",
            line4:"Now yu will be able to run another site on new tab.",
            image1:"/images/browser/BIQ4P1.png",
            image2:"/images/browser/BIQ4P2.png"
        }
    },
    {
        question:'Q4.How can i enable the incognito yab in the browser?',
        answer:{
            line1:'Sorry for the inconvenience.',
            line2:'But the Rocks Video Player doesn\'t support the ignito tab.But our team is working on it and surely yu will find it in upcoming version.',
            line3:'If yu have any queries please send us feedback.'
        }
    }
]

const Browser = () => {
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

export default Browser
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`