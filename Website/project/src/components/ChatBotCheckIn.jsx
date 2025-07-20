import React, { useEffect } from 'react';
import { geminiRequest } from '../utils/geminiIntegration';
import '../bubbles.css'
import { useState } from 'react';

function ChatBotCheckIn() {

  const messages = [
    { id: 1, text: "CriCri (Hi there, its nice to see you again. If you could rate your day from 1 to 10 what would it be?)", sender: "user" },
    { id: 2, text: "Placeholder for user input", sender: "other" },
    { id: 3, text: "CriCri Ribbit (Interesting, what makes you choose that number?)", sender: "user" },
    { id: 4, text: "That sounds interesting! What kind of project is it?", sender: "other" },
    { id: 5, text: "It's a React component for displaying chat bubbles!", sender: "user" },
    { id: 6, text: "Oh, how meta! I love it. Can you show me?", sender: "other" },
    { id: 7, text: "Sure, here's an example of how it looks.", sender: "user" },
    { id: 8, text: "Looks fantastic! Very clean and responsive.", sender: "other" },
  ];

  

    const [conversationState, setConvState] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
      const [textareaContent, setTextareaContent] = useState('');
  // const [submittedText, setSubmittedText] = useState('');

        const [frogMessage1Visibility, setFMsg1V] = useState(true);


    const [userMessage1, setUMsg1] = useState('');
    const [userMessage1Visibility, setUMsg1V] = useState(false);

        const [frogMessage2Visibility, setFMsg2V] = useState(false);

    const [userMessage2, setUMsg2] = useState('');
    const [userMessage2Visibility, setUMsg2V] = useState(false);

    const [frogMessage3, setFMsg3] = useState('');
    const [frogMessage3Visibility, setFMsg3V] = useState(false);



    const handleConv = (async () => {
      if (conversationState == 0) {     
        setUMsg1(textareaContent);
        setTextareaContent(''); // erases the textarea value
        setUMsg1V(true);
        sleep(2000);
        setFMsg2V(true);
        setConvState(1);
      } else if (conversationState == 1) {
        setUMsg2(textareaContent);
        setTextareaContent('');
        setUMsg2V(true);
        // Send request to API

          const postData = {
                "mood_score": parseInt(userMessage1),
    "habit_completion": 0.7, //TODO
    "text": userMessage2
          }

              try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData) // Convert JS object to JSON string
      });

      if (!response.ok || !response.status == 201) {
        const errorData = response.json(); // Attempt to parse error message from body
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the successful response body
      console.log(data);
      setFMsg3(`${data.explanation} \n we suggest: \n ${data.resources.professional_help} \n\n Immediate actions: \n 1. ${data.resources.immediate_actions}\n 2. ${data.resources.immediate_actions[1]}\n 3. ${data.resources.immediate_actions[2]}\n\n Coping strategies: \n ${data.resources.coping_strategies}`);
      setFMsg3V(true);

    } catch (err) {
      console.error('Error:', err);
    }

      }
    })

    return(
      <div style={{height: '100vh'}}>            
        <h1>Check in</h1>
        <div style={{display: 'flex', width: '100vw', justifyContent: 'flex-end'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem' , alignItems: 'flex-start', width: '67rem', height: '37rem', background: 'transparent', marginRight: '4rem', padding: '1rem'}}>
          

      {frogMessage1Visibility && (
          <div className='frog bubble'>
            <p>{messages[0].text}</p>
          </div>
      )}
          
      {userMessage1Visibility && (
          <div className='user bubble' >
            <p>{userMessage1}</p>
          </div>
      )}       

      {frogMessage2Visibility && (
              <div className='frog bubble'>
            <p>{messages[2].text}</p>
          </div>
      )}

      {userMessage2Visibility && (
          <div className='user bubble' >
            <p>{userMessage2}</p>
          </div>
      )}  

      {frogMessage3Visibility && (
             <div className='frog bubble'>
            <p>{frogMessage3}</p>
          </div>
      )}  



        </div>
        </div>

        <div style={{display: 'flex', alignContent: 'flex-end', width: '100vw', justifyContent: 'flex-end'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start'}}>
          <label htmlFor='inputmessage' style={{color: 'green', justifyContent: 'left'}}><strong>To Frog:</strong></label>
        <div style={{display: 'flex', justifyContent: 'flex-end', width: '60vw', gap: '2vw', marginRight: '4rem'}}>

          <textarea id='inputmessage' value={textareaContent} onChange={(e) => setTextareaContent(e.target.value)} placeholder='Enter your message...' style={{justifySelf: 'left', padding: '1rem', height: '9rem', width: '65rem', backgroundColor: 'white', color: 'black', borderRadius: '1rem'}}></textarea>
                  <button onClick={handleConv}  style={{height: '4rem', width: '4rem', background: 'green'}}>📩</button>

          </div>
                  </div>
        </div>

      </div>
    )
}
export default ChatBotCheckIn;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}