import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
const FeedBackItem = ({ item }) => {
    const [question, setquestion] = useState(false)
    return (<>
        <Container onClick={()=>setquestion(!question)}>
            <img src={item.image} alt={item.image} width={50} height={50} style={{}}/>
            <h2 style={{ flex: 1, marginLeft: 50 }}>{item.name}</h2>
            <DownLink >
                <FontAwesomeIcon icon={faArrowCircleDown} />
            </DownLink>
        </Container>
        {question&&    <Questions >
          <h3>{item.q1}</h3>
          <h3>{item.q2}</h3>
          <h3>{item.q3}</h3>
          <h3>{item.q4}</h3>
          <h3>{item.q5}</h3>
          <h3>{item.q6}</h3>
          <h3>{item.q7}</h3>
          <h3>{item.q8}</h3>
          <h3>{item.q9}</h3>
          <h3>{item.q10}</h3>
          <h3>{item.q11}</h3>
          <h3>{item.q12}</h3>
          <h3>{item.q13}</h3>
          <h3>{item.q14}</h3>
          <h3>{item.q15}</h3>
       </Questions>
            }
        </>
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

const Questions=styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin: auto;
`