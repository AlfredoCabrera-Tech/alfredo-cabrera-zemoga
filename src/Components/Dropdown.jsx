import {useContext, useState} from 'react'
import { useGlobalContext } from '../Hooks/useGlobalContext'

/* Styles */
import { StyledDropdown } from './Styles/Dropdown.styled'

function Dropdown() {
  const {
    displayMode,
    setDisplayMode
  } = useGlobalContext()

  const [checked, setChecked] = useState(false)

  const handleChangeDisplay = (e) => {
    setChecked(prev => !prev)
    setDisplayMode(e.target.textContent)
  }

  return (
    <StyledDropdown>
      <nav>
        <span
         onClick={handleChangeDisplay}
         className={checked ? 'checked' : ''}
        >
          {displayMode}
        </span>
        <ul>
          <li onClick={handleChangeDisplay}>List</li>
          <li onClick={handleChangeDisplay}>Grid</li>
        </ul>
      </nav>
    </StyledDropdown>
  )
}

export default Dropdown