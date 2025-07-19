import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Dashboard from './components/dashboard'
import FullScreenModal from './components/FullScreenModal'
import MorningHabit1 from './components/MorningHabit1'
import viteLogo from '/vite.svg'
import './App.css'
import AfternoonHabit1 from './components/AfternoonHabit1'
import EveningHabit1 from './components/EveningHabit1'

function App() {
  // const [count, setCount] = useState(0)
  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);
  const [isModalFourOpen, setIsModalFourOpen] = useState(false);


  const openModalOne = () => setIsModalOneOpen(true);
  const closeModalOne = () => setIsModalOneOpen(false);

  const openModalTwo = () => setIsModalTwoOpen(true);
  const closeModalTwo = () => setIsModalTwoOpen(false);

  const openModalThree = () => setIsModalThreeOpen(true);
  const closeModalThree = () => setIsModalThreeOpen(false);

  const openModalFour = () => setIsModalFourOpen(true);
  const closeModalFour = () => setIsModalFourOpen(false);

  return (
    <>
      <h1>My Vite React App</h1>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20vh'}}>
      <button onClick={openModalOne}>Open Modal One</button>
      <button onClick={openModalTwo}>Open Modal Two</button>
      <button onClick={openModalThree}>Open Modal Three</button>
      <button onClick={openModalFour}>Start check in</button>
    </div>



      <FullScreenModal isOpen={isModalOneOpen} onClose={closeModalOne}>
        <MorningHabit1/>
        <button onClick={closeModalOne}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalTwoOpen} onClose={closeModalTwo}>
        <AfternoonHabit1/>
        <button onClick={closeModalTwo}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalThreeOpen} onClose={closeModalThree}>
        <EveningHabit1/>
        <button onClick={closeModalThree}>Close this amazing pop-up</button>
      </FullScreenModal>

      <FullScreenModal isOpen={isModalFourOpen} onClose={closeModalFour}>
        <MorningHabit1/>
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