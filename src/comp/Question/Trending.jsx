import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {  id:"1",
       question:'Q1.How can I search for different video categories on rocks player trending video site?',
       answer:{
           line2:"Step 1.Click on online icon",
           line3:'Step 2.Click on the Online Video option and then yu will be able to search for videos of yur choice.',
           image1:"/images/trending/tvq1P1.png",
           image2:"/images/trending/tvq1P2.png"
       }
    },
    {   id:"2",
        question:'Q2.Want to create a playlist of yur favorite searches on the trending video site?',
        answer:{line2:"Tap on the heart shaped icon placed on the side of searched videos as shown in the picture.",
        line3:'Now selected videos will be saved on yur favourate automatically',
            image1:"/images/trending/tvq2P1.png",
            image2:"/images/trending/tvq2P2.png"
        }
    },
    {   id:"3",
        question:'Q3.Is it possible to set a perticular country on the trending video site?',
        answer:{
            line1:'Yes, yu can choose the country of yur choice. ',
            line2:"1.Click on Three Dot in Online Video",
            image1:'/images/trending/tvq3P1.png'
        }
    },
    {   id:'4',
        question:'Q4.How can i share a video directly from trending video site?',
        answer:{
            line2:'Tap to the share icon as shown in the picture below. ',
            line3:"and then yu can directly share yur videos easily",
            image1:"/images/trending/tvq4P1.png",
            image2:"/images/trending/tvq4P2.png"
        }
    }, { id:"5",
        question:'Q5.Sometimes why is it asking for a login for downloading any videos/photos?',
        answer:{
            line1:'No, it will be restored Automatically once yu\'ll install the app again.'
        }
    },
]

const Trending = () => {
    const history=useHistory()
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container onClick={()=>history.push({
                      pathname:'/trendinganswer',
                      state:{question:item.question,answer:item.answer,id:item.id}
                  })}>
                      <Questions>{item.question}</Questions>
                      <img src="/images/next.svg" alt="" width={15}/>
                  </Container>
                )
            })}
        </div>
    )
}

export default Trending
const Questions=styled.div`
padding: 10px;
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`