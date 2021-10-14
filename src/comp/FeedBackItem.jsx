import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const FeedBackItem = ({ item }) => {
    const history=useHistory()
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
            <a >
            {item.question[0]===null?
            <FontAwesomeIcon icon={faArrowRight}/> :''}
            </a>
           <a >
           <h4>{item.question[1]}</h4>
           </a>
           <a>
           <h4>{item.question[2]}</h4>
           </a>
          
          



          {/* <Quiz onClick={()=>history.push({pathname:'/answer',state:{answer:'Display page'}})}>
              <h4>{item.q1}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
          </Quiz>
          <Quiz>
          <h4>{item.q2}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>

          <Quiz>
          <h4>{item.q3}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q4}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q5}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q6}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q7}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q8}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q9}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q10}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q11}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q12}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q13}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         <Quiz>
          <h4>{item.q14}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>
         { item.q15&& <Quiz>
          <h4>{item.q15}</h4>
              <FontAwesomeIcon icon={faArrowRight}/>
         </Quiz>} */}
         {/* {item.questionAnswer1.question&& <Quiz onClick={()=>history.push({
             pathname:'/answer',
             state:item.questionAnswer1.answer
         })}>
             <h1>{item.questionAnswer1.question?item.questionAnswer1.question:''}</h1>
         </Quiz> } */}
         
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
const Quiz=styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`