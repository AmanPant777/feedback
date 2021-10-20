import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import styled from 'styled-components'
import Audio from './Question/Audio'
import Download from './Question/Download'
import Premium from './Question/Premium'
import Video from './Question/Video'
import VideoHide from './Question/VideoHide'
const Item = () => {
    const [videos,setVideos]=useState(false)
    const [audio,setAudio]=useState(false)
    const [download,setDownload]=useState(false)
    const [premium,setPremium]=useState(false)
    const [videoHide,setVideoHide]=useState(false)
    return (
        <Container>
            <div>
            <ItemContainer onClick={()=>setVideos(!videos)}>
               <Image src='/images/video.png'></Image>
               <ItemTitle>Video</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           {videos&& <Question>
               <Video/>
           </Question>}
            </div>
            <div>
            <ItemContainer onClick={()=>setAudio(!audio)}>
               <Image src='/images/music.png'></Image>
               <ItemTitle>Audio</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           {audio&& <Question>
               <Audio/>
               </Question>}
            </div>
            <div>
            <ItemContainer onClick={()=>setDownload(!download)}>
               <Image src='/images/download.png'></Image>
               <ItemTitle>Download Issues</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           {download&& <Question><Download/></Question> }
            </div>
           
           <ItemContainer>
               <Image src='/images/browser.png'></Image>
               <ItemTitle>Browser Issue</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           <div>
           <ItemContainer onClick={()=>setPremium(!premium)}>
               <Image src='/images/vip.png'></Image>
               <ItemTitle>Premium</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           {premium&&<Question><Premium/></Question>}
           </div>
           <ItemContainer>
               <Image src='/images/others.png'></Image>
               <ItemTitle>Others</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           <ItemContainer onClick={()=>setVideoHide(!videoHide)}>
               <Image src='/images/trnding.png'></Image>
               <ItemTitle>Video Hider Issues</ItemTitle>
               <FontAwesomeIcon icon={faArrowDown} size={'2x'}/>
           </ItemContainer>
           {videoHide&&<Question><VideoHide/></Question>}
        </Container>
    )
}

export default Item

const Container=styled.div`
height: 100%;
width: 100%;
margin: auto;
`
const ItemContainer=styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Image=styled.img`

`
const ItemTitle=styled.h3`
flex: 1;
font-size: 30px;
margin-left: 40px;
`
const Question=styled.div`
width: 90%;
margin:auto
`
