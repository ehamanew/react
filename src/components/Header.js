import PropTypes from "prop-types"
import Button from './Button'


const onClick=()=>{
console.log('click')
}

const Header = ({title, onAddTask, showAddTask}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAddTask} color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'close' : 'add'}/>
      
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
