import styled from 'styled-components'

export const StyledDropdown = styled.nav`
  
  nav {
    width : 150px; 
    background: white;
    border: 2px solid black; 
    margin-bottom: 2rem;
  }

  span {
    padding : 5px;
    text-align: center;
    background : white; 
    color : inherit;
    font-size : 0.9em;
    cursor : pointer;
    display: block;
  }

  span::after {
    float: right;
    right: 10%;
    content: "▼";
  }

  ul {
    clear:both;
    font-size : 0.9em;
    width:100%;
    height:0px;
    overflow: hidden;
    transition: height .4s ease;
  }

  ul li {
    padding : 5px;
    border-top: 2px solid black;
    text-align: center;
  }

  ul:hover{
    cursor: pointer;
  }

  

  span.checked + ul {
    height: 65px;
  } 

  @media all and (max-width: 768px) {
    display: none;
  }
`