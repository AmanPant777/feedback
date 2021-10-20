import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const Feeds = () => {
    return (
       <Container>
           <Title>
               Bug Report
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               New features/Requests
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               Subscription/VIP issues
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               Ads Complaints
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               Suggestions
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               Say Thanks
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
           <Title>
               Others
               <FontAwesomeIcon icon={faArrowRight} size={'1x'}/>
           </Title>
       </Container>
    )
}

export default Feeds

const Container=styled.div`
height: 100vh;
padding: 20px;
`
const Title=styled.h3`
font-size: 20px;
padding: 30px;
border-bottom: 1px solid gray;
display: flex;
justify-content: space-between;
`