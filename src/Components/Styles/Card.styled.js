import styled from 'styled-components'

export const StyledCard = styled.article`
  /* CARD STYLING */
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: white;
  background: ${props => props.displayMode==='List' ?
    "linear-gradient(90deg, rgba(146, 145, 145, 0.895) 0%, rgb(92, 92, 92) 53%, rgb(128, 128, 128) 100%), url('../public/assets/img/elon.png')" 
    :
    `linear-gradient(45deg, rgba(146, 145, 145, 0.5) 0%, rgba(37, 37, 37, 0.3) 23%, rgba(53, 53, 53, 0.4) 30%), url('../assets/img/${props.bg}') center/cover`};
  background-size:cover;
  width: ${props => props.displayMode==='Grid' && '100%'};
  height: ${props => props.displayMode==='Grid' && '350px'};
  
  .card__info{
    position: absolute;
    right: ${props => props.displayMode==='List' ? 
      '10px'
      :
      '40px'};
    top: 10px;
    bottom: ${props => props.displayMode==='Grid' && '32%'};
    font-size: ${props => props.displayMode==='Grid' && '0.6rem'};
  }

  .card__score-icon{
    position: absolute;
    left: 0;
    top: 0;

    & > img {
      width: 60%;
      height: 70%;
      padding: 0.5rem 0.7rem 0.3rem 0.5rem;
      background-color: ${props => props.positivePerc>props.negativePerc ?
          'rgba(var(--color-green-positive), .8);'
        :
          'rgba(var(--color-yellow-negative), .8);'
      };
    }
  }

  section{
    display: ${props => props.displayMode==='List' && 'flex'};
    gap: ${props => props.displayMode==='List' && '3rem'};
    justify-content: ${props => props.displayMode==='List' && 'space-between'};
    margin-right: ${props => props.displayMode==='List' && '0.5rem'};
    margin-left: ${props => props.displayMode==='List' && '15%'};
    margin-bottom: ${props => props.displayMode==='Grid' && '1rem'};

    & > .card__content--main{
      padding-top: ${props => props.displayMode==='Grid' && '40%'};
      width: ${props => props.displayMode==='Grid' && '80%'};
      margin: ${props => props.displayMode==='Grid' && '0 auto 2.5rem'};
    }
  }

  h3{
    font-size: 2rem;
    font-weight: 400;
    color: inherit;
    margin: 0;
    font-size: ${props => props.displayMode==='Grid' && '1.7rem'};
    overflow: ${props => props.displayMode==='Grid' && 'hidden'};
    max-width: ${props => props.displayMode==='Grid' && '10ch'};
    text-overflow: ${props => props.displayMode==='Grid' && 'ellipsis'};
    white-space: ${props => props.displayMode==='Grid' && 'pre'};
  }
  
  p{
    overflow: hidden;
    max-width: 20ch;
    text-overflow: ellipsis;
    white-space: pre;
    font-size: ${props => props.displayMode==='Grid' && '0.9rem'};
    font-weight: ${props => props.displayMode==='Grid' && '200'};
    max-width: ${props => props.displayMode==='List' && '35ch'};
  }

  /* BUTTONS CONTAINER */
  .card__btn{
    &__container{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2rem;

      & > .icon-button > img{
        width: 100%;
        height: 100%;
        max-width: 1.5rem;
        padding: 0 0.5rem 0.5rem;
      }
    }

    background: transparent;
    padding: none;
    height: 2.3rem;

    &:hover{
      cursor: pointer;
    }

    &--up{
      background-color: rgba(var(--color-green-positive), .8);
    }

    &--down{
      background-color: rgba(var(--color-yellow-negative), .8);
    }

    &--vote{
      color: inherit;
      background: rgba(0, 0, 0, .6);
      font-size: 1rem;
      padding: 0 1.5rem;
      border: 1.5px solid white;
      text-align: center;

      &:disabled{
        background: rgba(70, 70, 70, 1);
      }
    }
  }

  /* CARD PERCENTAGE BAR */
  .card__percentage{
    &__container{

      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size: ${props => props.displayMode==='Grid' ? 
          '0.9rem' 
        : 
          '1.5rem'};
      font-weight: 400;
      width: ${props => props.displayMode==='Grid'?
          '93.7%'
        :
          '97.7%'};
      height: ${props => props.displayMode==='Grid' ? 
          '1.5rem' 
        : 
          '3rem'};
      position: ${props => props.displayMode==='Grid' && 'absolute'};
      bottom: ${props => props.displayMode==='Grid' && '0'};
      padding: 0 0.6rem;
      & img{
        width: 15px;
        padding-top: 0.2rem;
      }
      background-color: rgba(var(--color-green-positive), .8);
      background: linear-gradient(90deg, rgba(60,187,180,0.8) 0%, rgba(60,187,180,0.8) ${props => props.positivePerc}%, rgba(249,173,29,0.8) ${props => props.positivePerc}%, rgba(249,173,29,0.8) 100%);
    }

    &--up{
      padding-left: 0.6rem;
      padding-top: 0.5rem;
      height: calc(100% - 0.5rem);
      width: ${props => props.positivePerc}%;/* 26%; */
    }

    &--down{
      text-align: end;
      padding-right: 0.6rem;
      padding-top: 0.5rem;
      height: calc(100% - 0.5rem);
      width: ${props => props.negativePerc}%;/* 74%; */
      background-color: rgba(var(--color-yellow-negative), .8);
      & > img{
        width: 15px;
        padding-top: 0.2rem;
      }
    }

    &--up, &--down{
      padding-top: ${props => props.displayMode==='Grid' && '0.1rem'};
      height: ${props => props.displayMode==='Grid' && 'calc(100% - 0.15rem)'};

    }

  }

  @media all and (min-width: 1024px) {
    .card__percentage__container{
      width: ${props => props.displayMode==='List' && '98.3%'};
    }
  }

  @media all and (max-width: 768px) {
    background: ${props => `linear-gradient(45deg, rgba(146, 145, 145, 0.5) 0%, rgba(37, 37, 37, 0.3) 23%, rgba(53, 53, 53, 0.4) 30%), url(../assets/img/${props.bg}) center/cover`};
    width: 100%;
    height: 350px;

    .card__info{
      right: 40px;
      bottom: 32%;
      font-size: 0.9rem;
    }

    .card__score-icon{
      width: 15%;
      left: -10px;
    }

    section{
      margin-bottom: 1rem;

      & > .card__content--main{
        padding-top: 40%;
        width: 80%;
        margin: 0 auto 2.5rem;
      }
    }

    h3{
      font-size: 1.9rem;
      overflow: hidden;
      max-width: 12ch;
      text-overflow: ellipsis;
      white-space: pre;
    }

    p{
      font-size: 1.2rem;
      font-weight: 200;
      max-width: 40ch;
    }

    /*  BUTTONS CONTAINER */
    .card__btn{
      &__container{
        position: absolute;
        bottom: 5rem;
        right: 7rem;

        & > .icon-button > img{
        width: 100%;
        height: 100%;
        max-width: 4.5rem;
        padding: 0.5rem;
      }
      }
    }

    /* CARD PERCENTAGE BAR */
    .card__percentage{
      &__container{
        font-size: 1.5rem;
        height: 2.5rem;
        position: absolute;
        bottom: 0;
        width: 100%;
      }

      &--up, &--down{
        height: calc(100% - 0.15rem);
        padding: 0.2rem 2rem 0.2rem 0;
      }
    }


  }

`