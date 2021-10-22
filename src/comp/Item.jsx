import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import styled from 'styled-components'
import Audio from './Question/Audio'
import Browser from './Question/Browser'
import Download from './Question/Download'
import Others from './Question/Others'
import Premium from './Question/Premium'
import Trending from './Question/Trending'
import Video from './Question/Video'
import VideoHide from './Question/VideoHide'
const Item = () => {
    const [videos,setVideos]=useState(false)
    const [audio,setAudio]=useState(false)
    const [download,setDownload]=useState(false)
    const [premium,setPremium]=useState(false)
    const [videoHide,setVideoHide]=useState(false)
    const [trending,setTrending]=useState(false)
    const [browser,setBrowser]=useState(false)
    const [others,setOthers]=useState(false)
    return (
        <Container>
            <div>
            <ItemContainer onClick={()=>setVideos(!videos)}>
               <Image src='/images/video.png'></Image>
               <ItemTitle>Video</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {videos&& <Question>
               <Video/>
           </Question>}
            </div>
            <div>
            <ItemContainer onClick={()=>setAudio(!audio)}>
               <Image src='/images/music.png'></Image>
               <ItemTitle>Audio</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {audio&& <Question>
               <Audio/>
               </Question>}
            </div>
            <div>
            <ItemContainer onClick={()=>setDownload(!download)}>
               <Image src='/images/download.png'></Image>
               <ItemTitle>Download Issues</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {download&& <Question><Download/></Question> }
            </div>
           
           <ItemContainer onClick={()=>setBrowser(!browser)}>
               <Image src='/images/browser.png'></Image>
               <ItemTitle>Browser Issue</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {browser&&<Question><Browser/></Question>}
           <div>
           <ItemContainer onClick={()=>setPremium(!premium)}>
               <Image src='/images/vip.png'></Image>
               <ItemTitle>Premium</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {premium&&<Question><Premium/></Question>}
           </div>
           <ItemContainer onClick={()=>setOthers(!others)}>
               <Image src='/images/others.png'></Image>
               <ItemTitle>Others</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {others&& <Question><Others/></Question>}
           <ItemContainer onClick={()=>setTrending(!trending)}>
               <Image src='/images/trnding.png'></Image>
               <ItemTitle>Trending Videos</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {trending&&<Question><Trending/></Question>}
           <ItemContainer onClick={()=>setVideoHide(!videoHide)}>
               <Image src='/images/hide.png'></Image>
               <ItemTitle>Video Hider Issues</ItemTitle>
               <img src='/images/next-down.svg' width={20}/>
           </ItemContainer>
           {videoHide&&<Question><VideoHide/></Question>}
        </Container>
    )
}
export default Item

const Container=styled.div`
height: 100%;
width: 800px;
margin: auto;
@media (max-width:768px){
    width:100%;
}
`
const ItemContainer=styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Image=styled.img`

`
const ItemTitle=styled.h3`
flex: 1;
font-size: 20px;
margin-left: 20px;
@media (max-width: 768px) {
    font-size: 15px;
}
`
const Question=styled.div`
width: 97%;
margin-left: 10px;
`
