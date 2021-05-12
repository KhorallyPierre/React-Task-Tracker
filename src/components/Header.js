import PropTypes from 'prop-types'
import Button from './Button'
// this is where all of our compoennets are created (uppercase is used for component js files)

const Header = ({title}) => {
  const onClick = () => {
    console.log('Click')
  }
  return (

    <header className ='header'>
      <h1> {title}</h1>
      <Button color='green' text='Add' onClick = {onClick}/>
    </header>


  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css in JS
// const headingStyle = {
//   color:'purple',
//   backgroundColor: 'black'
// }

export default Header
