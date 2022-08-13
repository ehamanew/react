import PropTypes from 'prop-types'

const onClick = (e)=>{
   // console.log('click')
}

const Button = ({color, text, onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:color}}
     className="btn">{text}</button>

  )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.defaultProps = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button