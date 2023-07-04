import React from 'react'
import PropTypes from 'prop-types';

const Header = ({text}) => {
    const HeaderStyle={
        backgroundColor: 'blue',
        color: 'grey'
    }
  return (
    <>
    <header style={HeaderStyle}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
    </>
  )
}
Header.defaultProps={
    text: 'Feedback UI'
}
Header.propTypes = {
    text: PropTypes.string,
}

export default Header