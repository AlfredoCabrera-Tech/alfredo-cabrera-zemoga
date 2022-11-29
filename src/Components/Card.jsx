import React, {useState, useRef, useEffect} from 'react'
import { StyledCard } from './Styles/Card.styled'
import { useGlobalContext } from '../Hooks/useGlobalContext'

function Card(props) {
  const {
    displayMode,
    celebsToStore
  } = useGlobalContext()

  const {
    celeb
  } = props


  const name = celeb.name

  const {positive, negative} = celebsToStore[name]
  
  const timeRef = useRef()
  
  const[celebState, setCelebState] = useState(celeb)
  const[positives, setPositives] = useState(positive)
  const[negatives, setNegatives] = useState(negative)
  const[totalVotes, setTotalVotes] = useState(positive+negative)
  const[positivePerc, setPositivePerc] = useState((positive*100)/(positive+negative))
  const[negativePerc, setNegativePerc] = useState((negative*100)/(positive+negative))
  const[voted, setVoted] = useState(false)
  const[isPositive, setIsPositive] = useState(false)
  const[isNegative, setIsNegative] = useState(false)
  
  const newVotes = {
    positive: positives,
    negative: negatives
  }

  useEffect(() => {
    localStorage.setItem(name,JSON.stringify(newVotes))
  }, [celebState, name])

  const handleClickUp = () => {
    if(!voted){
      setIsPositive(prev => !prev)
      setIsNegative(false)
    }
  }
  const handleClickDown = () => {
    if(!voted){
      setIsNegative(prev => !prev)
      setIsPositive(false)
    }
  }
  const handleVote = () => {
    setVoted(prev => !prev)
    
    if(isPositive||isNegative){
      setTotalVotes(prev => prev + 1)
    }
    
    if(isPositive){
      setPositives(prev => prev + 1)
      setPositivePerc((positives*100)/totalVotes)
      setNegativePerc((negatives*100)/totalVotes)
      setCelebState(prev => {
        return {
          ...prev,
          votes: {
            positive: prev.votes.positive + 1,
            negative: prev.votes.negative
          }
        }
      })

    } if(isNegative){
      setNegatives(prev => prev + 1)
      setNegativePerc((negatives*100)/totalVotes)
      setPositivePerc((positives*100)/totalVotes)
      setCelebState(prev => {
        return {
          ...prev,
          votes: {
            positive: prev.votes.positive,
            negative: prev.votes.negative + 1
          }
        }
      })
    }
    setIsPositive(false)
    setIsNegative(false)
  }
  
  let timeIs = 0
  function renderTime(){
    const timeAgo = Date.parse(celeb.lastUpdated)
    const today = new Date().getTime()
    const timeDifference = (today-timeAgo)/(1000*60*60*24)
    timeRef.current = timeDifference
    let timeToRender = Math.round(timeRef.current/31)
    
    if(timeToRender>31){
      timeIs = Math.round(timeToRender/31) + ' month'
      return timeIs
    } if(timeToRender<31){
      timeIs = timeToRender + ' days'
      return timeIs
    } if(timeToRender>365){
      timeIs = timeToRender + ' years'
      return timeIs
    }
    return timeIs
  }

  renderTime()

  return (
    <>
      <StyledCard
       displayMode={displayMode}
       negativePerc={negativePerc}
       positivePerc={positivePerc}
       bg={celeb.picture}
      >
        {/* CARD HEADER */}
        <span
         className='card__score-icon'
         aria-label={`thumbs ${positivePerc<negativePerc ? 'down' : 'up'}`}
        >
          <img
            src={`assets/img/thumbs-${positivePerc<negativePerc ? 'down' : 'up'}.svg`} 
            alt={`thumbs ${positivePerc<negativePerc ? 'down' : 'up'}`} 
          />
        </span>

        {/* CARD BODY */}
        
        <span
         className='card__info'
        >
          {voted ?
           'Thank you for your vote!' : 
           `${timeIs} ago in ${celeb.category}`}
        </span>

        <section className='card__content'>
          <div className='card__content--main'>
            <h3>{celeb.name}</h3>
            <p>{celeb.description}</p>
          </div>

          {/* BUTTON CONTAINER */}

          <div className='card__btn__container'>
            <button
              className='card__btn card__btn--up icon-button'
              aria-label="thumbs up"
              onClick={handleClickUp}
            >
              <img src="assets/img/thumbs-up.svg" alt="thumbs up" value={celeb}/>
            </button>

            <button
              className='card__btn card__btn--down icon-button'
              aria-label="thumbs down"
              value={celeb}
              onClick={handleClickDown}
            >
              <img src="assets/img/thumbs-down.svg" alt="thumbs down" value={celeb}/>
            </button>

            <button
              className='card__btn card__btn--vote'
              onClick={handleVote}
              disabled={ displayMode==='List' && false}
            >
              {voted ?  'Vote Again' : 'Vote Now'}
            </button>
          </div>
        </section>

        {/* PERCENTAGE CONTAINER */}

        <div className='card__percentage__container'>
           
          <span>
            <img
            src='assets/img/thumbs-up.svg' 
            alt='thumbs up'/>{positivePerc.toFixed(2)}% 
          </span>
          <span>{negativePerc.toFixed(2)}% <img
            src='assets/img/thumbs-down.svg' 
            alt='thumbs down'/>
          </span>
          
        </div>
      </StyledCard>
    </> 
  )
}

export default Card