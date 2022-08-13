import PropTypes from "prop-types"
import Button from './Button'
import {useLocation} from "react-router-dom"


const onClick=()=>{
console.log('click')
}

const Header = ({title, onAddTask, showAddTask}) => {
  const locatiopn = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {locatiopn.pathname==='/' &&<Button onClick={onAddTask} color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'close' : 'add'}/>}
      
    </header>
    
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'task traker',
}
export default Header
