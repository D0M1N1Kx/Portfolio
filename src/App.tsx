import { Header } from './components/header'
import { Body } from './components/body'
import { Footer } from './components/footer'

function App() {
  return (
    <div className='min-h-screen bg-[#070b14] text-slate-100 relative overflow-hidden selection:bg-blue-600 selection:text-white'>
      {/* Cyber Sapphire ambient glow lights */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] -left-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[70%] -right-48 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Body />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App