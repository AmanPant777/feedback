import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const data=[
    {
       question:'Q1.Want to know about steps to download Facebook/Instagram videos?',
       answer:{  
           line1:'Yu can easily change the Theme by following this steps',
           line2:'1. Copy the URL of the video yu want to download.',
           line3:'2. Open the Homepage of the Rocks Video Player and paste the url shown below in the picture.',
           line4:'3. Now click on the download button and yur video will bw downloaded in few seconds.',
           image1:'/images/videos/vq1p1.png',
           image2:'/images/videos/vq1p2.png',
           image3:'/images/videos/vq1p3.png'
        }
    },
    {
        question:'Q2.How can I save videos in my gallery from the local storage of rocks player?',
        answer:{  line1:'Whatever the videos yu have downloaded through Rocks Video Player will be saved automatically on yur phones gallery.'}
    },
    {
        question:'Q3.While watching a video, why I\'m facing a sound issue?',
        answer:{  }
    },
    {
        question:'Q4.How can I learn about gesture control in rocks player?',
        answer:{  image1:'/images/videos/vq3P1.png'}
    },
    {
        question:'Q5.Why there is a buffering issue in online videos?',
        answer:{  line1:'There might be an internet connectivity issue and if it\'s not like that yu may try these ways to solve the issues',
               line2:'1.Switch Decoders',
               line3:'2.Turn off yur mobile data and restart yur phone and again open Rocks Player App.',
               image1:'/images/videos/vq4P1.png'
    }
    },
    {
        question:'Q6.How can I minimize the video full screen?',
        answer:{  line1:'1. Click on the minimize icon.',
              image1:'/images/videos/vq5P1.png'
    }
    },
    {
        question:'Q7.Is there any Equalizer in rocks player so that I can manage sound according to my choice?',
        answer:{  line1:'Yes Rocks Player support Equalizer.',
     image1:'/images/videos/vq6P1.png'
    }
    },
    {
        question:'Q8.How to check the Subtitle option in rocks player?',
        answer:{  line2:'1.Click the icon as shown in the picture.',
    line3:'2.Now yu can search online subtitles and offline according to yur choice.',
    image1:'/images/videos/vq7P1.png',
    image2:'/images/videos/vq7P2.png'
    }
    },
    {
        question:'Q9.How can I play video in the background as an mp3?',
        answer:{  line2:'1.Click on the Background Music icon.',
    image1:'/images/videos/vq8P1.png'
    }
    },
    {
        question:'Q10.Is it possible to take a screenshot of any part of a video while the video is running on screen?',
        answer:{  line2:'1.Click to Screenshot icon.',
    image1:'/images/videos/vq9P1.png'
    }
    },
    {
        question:'Q.11 How to manage full screen in the popup videos?',
        answer:{  line3:''}
    },
    {
        question:'Q12.How can I turn on/off auto-rotation?',
        answer:{  line1:'1.Click on rotation icon to on/off auto-rotation.',
    image1:'/images/videos/vq11P1.png'
    }
    },
    {
        question:'Q13.Why am I not able to download youtube videos from rocks video player?',
        answer:{  line1:'Sorry to say that but due to legal restriction we are unable to support youtube videos downloads.Here yu can only watch youtube videos.'}
    },
    {
        question:'Q14.Why am I failed to play the next video continuously?',
        answer:{  line1:'If yu open the open the video from yur phone or file manager the Rocks Video player dosen\'t play the next video until yu select the next video inside the Rocks Player.'}
    },
    {
        question:'Q15.How can I change the colour of the subtitle in the video?',
        answer:{  line2:'Click the subtitle customization option as shown in the picture.',
          image1:'/images/videos/vq14P1.png'
    }
    },
    {
        question:'Q16.How can I switch from S/W to H/W   decoder while the video is running on screen?',
        answer:{  line2:'1.Click on the three dot.',
    line3:'2.Click on the Decoder option.',
    line4:'3.Now switch from S/W to H/W decoder.',
    image1:'/images/videos/vq15P1.png',
    image2:'/images/videos/vq15P2.png',
    image3:'/images/videos/vq15P3.png'
    }
    },
    {
        question:'Q17.Why am I not able to manage the playback speed of the video?',
        answer:{  line1:'Rocks Player support playback speed feature of the Video player.Yu can manage the playback speed directly from player\'s screen as shown below.',
    image1:'/images/videos/vq16P1.png'
    }
    },

]
const Video = () => {
    const history=useHistory()
    return (
        <div>
            {data.map((item)=>{
                return (
                  <Container onClick={()=>history.push({pathname:'answer',state:{question:item.question,answer:item.answer}})}>
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