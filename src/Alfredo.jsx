import React, {useState, useRef, useEffect} from 'react'
import Card from './Components/Card'
import Dropdown from './Components/Dropdown'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useGlobalContext } from './Hooks/useGlobalContext'

//Styles
import { ComponentTitle } from './Components/Styles/Title.styled'
import { CardsContainer } from './Components/Styles/CardsContainer.styled'
import { MobileCardsContainer } from './Components/Styles/MobileCardsContainer.styled'

/* export const GlobalContext = React.createContext() */

function Alfredo() {

  const celebs = useRef()

  const {
    celebsToStore,
    setCelebsToStore,
    displayMode
  } = useGlobalContext()

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch('assets/data.json')
        const json = await response.json()
        const localStorageKeys = Object.keys(localStorage)
        console.log(localStorageKeys)
        const oldDataArr = []
        json.data.forEach(item => {
          if(localStorageKeys.includes(item.name)){
            oldDataArr.push(true)
          } else{
            oldDataArr.push(false)
          }
        }) 

        const oldDataProof = oldDataArr.reduce((ac,cu) => ac*cu)

        celebs.current = json.data

        if(oldDataProof === 0){ 
          localStorage.clear()
          const celebsCount = {}
          for(let item in json.data){
            celebsCount[json.data[item].name] = {positive: json.data[item].votes.positive, negative: json.data[item].votes.negative}
          }
          console.log(celebsCount)
          setCelebsToStore(celebsCount)
        }
        
        if(oldDataProof !== 0){
          const celebsCount = {}
          for(let item of localStorageKeys){
            celebsCount[item] = JSON.parse(localStorage.getItem(item))
          }
          setCelebsToStore(celebsCount)
          console.log(celebsToStore)
        }

      } catch(err){
        console.log(err)
      }
    })()
  }, [])

  let {current} = celebs

  useEffect(() => {
    for(let item in celebsToStore){
      localStorage.setItem(item,JSON.stringify(celebsToStore[item]))
    }
  }, [celebsToStore])

  return (
    
      <>
      {/* MODULE TITLE + DROPDOWN */}
        <ComponentTitle>
          <h2>Previous Rulings</h2>
          <Dropdown />
        </ComponentTitle>
          
      {/* CARDS CONTAINER */}
        <CardsContainer displayMode={displayMode}>
            {current && current.map((celeb, index) => (
              <Card key={index} celeb={celeb}/>
            ))}
        </CardsContainer>

        {/* MOBILE CARDS CAROUSEL */}
        <MobileCardsContainer>
          <Carousel showThumbs={false}>
            {current && current.map((celeb, index) => (
              <Card key={index} celeb={celeb}/>
            ))}
          </Carousel>
        </MobileCardsContainer>
      </>

  )
}

export default Alfredo