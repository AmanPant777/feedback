import React from 'react'
import styled from 'styled-components'
import FeedBackItem from './FeedBackItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Data = [
    {
        name: 'Videos',
        image: '/images/video.png'
    },
    {
        name: 'Audio',
        image: '/images/music.png'
    },
    {
        name: 'Download Issues',
        image: '/images/download.png'
    },
    {
        name: 'Browser Issues',
        image: '/images/browser.png'
    },
    {
        name: 'Premium',
        image: '/images/vip.png'
    },
    {
        name: 'Others',
        image: '/images/others.png'
    }
]


const Fedback = () => {
    return (
        <Container>
            <HeaderFeedBack>
                <HeaderImage>
                    <FontAwesomeIcon icon={faArrowLeft} size={'2x'} />
                </HeaderImage>
                <HeaderTitle>Help & Feedback</HeaderTitle>
            </HeaderFeedBack>
            <FeedBack>
                <FeedBackTitle>
                    <h2>FAQ</h2>
                    <h2>FeedBack</h2>
                </FeedBackTitle>
                <FeedBackValue>
                    {Data.map(item => <FeedBackItem item={item} />)}
                </FeedBackValue>
            </FeedBack>
        </Container>
    )
}
export default Fedback

const Container = styled.div`
color: white;
`

const HeaderFeedBack = styled.div`
display: flex;
padding: 20px;
margin-left: 20px;
color: white;
align-items: center;
`
const HeaderImage = styled.div`
color: white;

`
const HeaderTitle = styled.h1`
font-weight: 800;
margin-left: 50px;
`
const FeedBack = styled.div`

`
const FeedBackTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
margin: 40px auto;
border-bottom: 3px solid red;
`

const FeedBackValue = styled.div``
