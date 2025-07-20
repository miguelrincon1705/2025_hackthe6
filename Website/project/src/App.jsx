import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import FullScreenModal from './components/FullScreenModal'
import viteLogo from '/vite.svg'
import './App.css'
import AfternoonHabit1 from './components/AfternoonHabit1'
import AfternoonHabit2 from './components/AfternoonHabit2'
import AfternoonHabit3 from './components/AfternoonHabit3'
import EveningHabit1 from './components/EveningHabit1'
import EveningHabit2 from './components/EveningHabit2'
import EveningHabit3 from './components/EveningHabit3'
import MorningHabit1 from './components/MorningHabit1'
import MorningHabit2 from './components/MorningHabit2'
import MorningHabit3 from './components/MorningHabit3'
import ChatBotCheckIn from './components/ChatBotCheckIn'

function App() {
  // const [count, setCount] = useState(0)

  const [isButtonADisabled, setIsButtonADisabled] = useState(false);
  const [isButtonBDisabled, setIsButtonBDisabled] = useState(false);
  const [isButtonCDisabled, setIsButtonCDisabled] = useState(false);

  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);
  const [isModalFourOpen, setIsModalFourOpen] = useState(false);

    // Helper function to get a random content
  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Arrays of habits to select random habits from
  const arrayOfContentMorning = useMemo(() => [
    {content: <MorningHabit1/>, buttonName: "Morning walk/run", buttonIcon: "TBD"},
    {content: <MorningHabit2/>, buttonName: "Strength training", buttonIcon: "TBD"},
    {content: <MorningHabit3/>, buttonName: "Balanced breakfast"}
  ], []);

    const arrayOfContentAfternoon = useMemo(() => [
    {content: <AfternoonHabit1/>, buttonName: "Balanced lunch", buttonIcon: "TBD"},
    {content: <AfternoonHabit2/>, buttonName: "Reach out to a friend or family member", buttonIcon: "TBD"},
    {content: <AfternoonHabit3/>, buttonName: "Gratitude journal"}
  ], []);

    //TODO mention that all these habits induce a better sleep
    const arrayOfContentEvening = useMemo(() => [
    {content: <EveningHabit1/>, buttonName: "15 minute meditation", buttonIcon: "TBD"},
    {content: <EveningHabit2/>, buttonName: "Relaxing bath", buttonIcon: "TBD"},
    {content: <EveningHabit3/>, buttonName: "Purpose journal"}
  ], []);

  const [randomContentMorning, setRandomContentMorning] = useState(() => getRandomItem(arrayOfContentMorning));
  const [randomContentAfternoon, setRandomContentAfternoon] = useState(() => getRandomItem(arrayOfContentAfternoon));
  const [randomContentEvening, setRandomContentEvening] = useState(() => getRandomItem(arrayOfContentEvening));

  const [buttonLabelA, setButtonLabelA] = useState('???');
  const [buttonLabelB, setButtonLabelB] = useState('???');
  const [buttonLabelC, setButtonLabelC] = useState('???');


  const openModalOne = () => setIsModalOneOpen(true);
  const closeModalOne = () => 
  {
    setIsModalOneOpen(false);
    setButtonLabelA(`✅${randomContentMorning.buttonName}`);
    setIsButtonADisabled(true);
  }
  const openModalTwo = () => setIsModalTwoOpen(true);
  const closeModalTwo = () => 
    {
      setIsModalTwoOpen(false);
      setButtonLabelB(`✅${randomContentAfternoon.buttonName}`);
      setIsButtonBDisabled(true);
    }

  const openModalThree = () => setIsModalThreeOpen(true);
  const closeModalThree = () => 
  {
    setIsModalThreeOpen(false);
    setButtonLabelC(`✅${randomContentEvening.buttonName}`);
    setIsButtonCDisabled(true);
  }

  const openModalFour = () => setIsModalFourOpen(true);
  const closeModalFour = () => setIsModalFourOpen(false);



  return (
    <>
      <h1>CriCri</h1>
    <div style={{display: 'flex', flexDirection: 'column', gap: '15vh'}}>
      <button onClick={openModalOne} disabled={isButtonADisabled} style={{cursor: isButtonCDisabled ? 'not-allowed' : 'pointer', opacity: isButtonADisabled ? 0.8 : 1,}}>{buttonLabelA}</button>
      <button onClick={openModalTwo} disabled={isButtonBDisabled} style={{cursor: isButtonCDisabled ? 'not-allowed' : 'pointer', opacity: isButtonBDisabled ? 0.8 : 1,}}>{buttonLabelB}</button>
      <button onClick={openModalThree} disabled={isButtonCDisabled} style={{cursor: isButtonCDisabled ? 'not-allowed' : 'pointer', opacity: isButtonCDisabled ? 0.8 : 1,}}>{buttonLabelC}</button>
      <button onClick={openModalFour}>Start check in</button>
    </div>

      <FullScreenModal isOpen={isModalOneOpen} onClose={closeModalOne}>
        {randomContentMorning.content}
        <button onClick={closeModalOne}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalTwoOpen} onClose={closeModalTwo}>
        {randomContentAfternoon.content}
        <button onClick={closeModalTwo}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalThreeOpen} onClose={closeModalThree}>
        {randomContentEvening.content}
        <button onClick={closeModalThree}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalFourOpen} onClose={closeModalFour}>
        <ChatBotCheckIn/>
        <button onClick={closeModalFour}>Close this amazing pop-up</button>
      </FullScreenModal>
    </>
  )
}

export default App




















      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}