import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'

function App() {
  return (
    <>
      <div className='main'>
        <Header />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
      </div>
    </>
  )
}

export default App
