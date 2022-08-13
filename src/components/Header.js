import PropTypes from "prop-types"
import Button from './Button'


const onClick=()=>{
console.log('click')
}

const Header = ({title}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color='green' text='Add'/>
      
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
