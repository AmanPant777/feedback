import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const data=[
    {   id:'1',
        question:"Q1 Even if I have locked the video, why is it still displaying in the folder/videos list?",
        answer:{
            line1:'That may be due to SD card storage i.e your video may be located in sd card and As we don\'t have permission to modify sd files. That\'s why videos are shown in the folder list.\
            You may try these ways:',
            line2:"•Move the video from the sd card to your mobile phone.",
            line3:"•Now hide the video from the scanned list again.",

        }
    },
    {   id:'2',
        question:"Q2.Want to share the Rocks Video Player application with your friends?",
        answer:{  
            line1:'•Tap to the top left corner of the rocks video player screen as shown in the picture below.',
            line2:'•Click to "Share Application" and now share it through your preferred app/site.',

        }
    },
    {  id:'3',
        question:"Q3. Are you Looking for your preferred language in this app?",
        answer:{
            line1:"You can select the language of your choice so that you can use this app easily with your preferred language.\
            You may go through these steps:",
            line2:" •Tap to three dots(•••) placed on the top right corner of the screen.",
            line3:'•Go to settings and then click the "Select Language" option.',
            line4:'• You\'ll find more than 30 language options and now choose the language that you prefer for yourself.'
        }
    },
    {   id:'4',
        question:"Q4. Why there are only selected themes on the music player's screen?",
        answer:{ 
            line1:'You may find few themes but if you\'re looking for more advanced themes then you have to be a premium member for this and after that, you\'ll be able to see several themes on the Rocks video player.'
        }
    },
    {   id:'5',
        question:"Q5. How can I change the theme of the player's screen?",
        answer:{
            line1:'•Click to the top right corner and tap to theme icon as shown below in the picture.',
            line2:"Now select the theme of your choice."
        }
    },
]

const Others = () => {
    return (
        <>
        {data.map(item=>
             <Container to={{
                 pathname:'/othersanswer',
                 state:{question:item.question,answer:item.answer,id:item.id}
             }} key={item.id}>
            <QuestionTitle>
                {item.question}
            </QuestionTitle>
            <Icon src='/images/next.svg' />
        </Container>
        )}
       </>
    )
}

export default Others

const Container=styled(Link)`
display: flex;
align-items: center;
justify-content:space-between;
padding: 7px;
cursor: pointer;
text-decoration: none;
color: white;
`
const QuestionTitle=styled.div`
padding: 1px;
text-decoration: none;
`
const Icon=styled.img`
width: 15px;
`