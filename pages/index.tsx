import type { NextPage } from 'next'
import Head from 'next/head'
import ItemContainer from '../components/ItemContainer'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ScoreBoard from '../components/ScoreBoard'
import Modal from '../components/Modal'
import { useState } from 'react'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [yourChoice, setYourChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [win, setWin] = useState('' as 'WIN' | 'LOSE' | 'TIED')
  const [points, setPoints] = useState(0)

  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor( Math.random() * choices.length)
  
  
  const handleItemClick = (itemName: string) => {
    setYourChoice(itemName)
    setComputerChoice(choices[randomChoice])
    setWin(checkWin(yourChoice, computerChoice))
    if (win === 'WIN') {
      let pointTemp = points + 1
      setPoints(pointTemp)
    }
  }

  const resetChoice = () => {
    setYourChoice('')
  }

  const handleModalClose = () => {
    console.log('works');
    
    setShowModal(false)
  }

  const checkWin = (yourChoice: string, compChoice: string) => {
    if ((yourChoice === 'scissors' && compChoice === 'paper') || (yourChoice === 'rock' && compChoice === 'scissors') || (yourChoice === 'paper' && compChoice === 'rock')) {
      return 'WIN'
    } else if(yourChoice === compChoice) {
      return 'TIED'
    }

    return 'LOSE'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="Game Logo" width={80} height={40} />
          </div>
          <div className={styles.scoreboard}>
            <ScoreBoard score={points} />
          </div>
        </div>
        {!yourChoice && <>
          <div className={styles.double}>
        <ItemContainer handleClick={handleItemClick} itemName='paper' />
        <ItemContainer handleClick={handleItemClick} itemName='scissors' />
        </div>
        <div className={styles.single}>
        
        <ItemContainer handleClick={handleItemClick} itemName='rock' />
        </div></>}
        {yourChoice && <>
          <div className={styles.double}>
            <div>
            <ItemContainer itemName={yourChoice} />
            <h3>YOU PICKED</h3>
            </div>

            <div>
            <ItemContainer itemName={computerChoice} />
            <h3>THE HOUSE PICKED</h3>
            </div>
          </div>
        </>}

        {win && <div className={styles.single}>
        <h3>YOU {win}</h3>
        </div>}

        {yourChoice && <div className={styles.single}>
          <button onClick={resetChoice} className={styles.outlined_button}>PLAY AGAIN</button>
        </div>}

        <div className={styles.single}>
          <button onClick={() => setShowModal(true)} className={styles.outlined_button}>RULES</button>
        </div>
        <Modal title="My Modal" onClose={handleModalClose} show={showModal} />
      </main>
    </div>
  )
}

export default Home
