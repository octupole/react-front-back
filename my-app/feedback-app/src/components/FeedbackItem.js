import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'

function FeedbackItem({item, handleDelete}) {

  return (
    <Card >
        <div className='num-display'>{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem