import React from 'react'
import { Title } from '../Title/Title'

const Header = ({ nombre }) => {
  return (
    <header>
      <Title nombre={nombre} />
    </header>
  )
}

export default Header