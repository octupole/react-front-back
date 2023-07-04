import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
  return (
    <>
    <Card>
    <div className='about'>
        <h1>About Page</h1>
        <p>Again and again </p>
        <p>Again and again</p>
        <p><Link to='/'>Home</Link></p>
    </div>
    </Card>
    </>
  )
}
