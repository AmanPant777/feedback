import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
const FeedBackItem = ({ item }) => {
    return (
        <Container>
            <img src={item.image} alt={item.image} width={50} height={50} />
            <h2 style={{ flex: 1, marginLeft: 50 }}>{item.name}</h2>
            <DownLink >
                <FontAwesomeIcon icon={faArrowCircleDown} />
            </DownLink>
        </Container>
    )
}
export default FeedBackItem
const Container = styled.div`
display: flex;
width: 80%;
margin: auto;
padding: 20px;
align-items: center;
color: white;
justify-content: space-between;
`

const DownLink = styled.div`
width: 30px;
cursor: pointer;
color: white;
`