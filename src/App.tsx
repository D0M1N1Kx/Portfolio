import { useState } from 'react'
import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <div className='min-h-screen bg-black/90'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}
export default App