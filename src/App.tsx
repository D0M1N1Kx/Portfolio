import { useState } from 'react'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <div className='bg-black min-h-screen'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}
export default App