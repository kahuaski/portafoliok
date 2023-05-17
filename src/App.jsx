
import './App.css'
import Header from './layout/Header'
import Homes from './pages/Homes'
import Technologies from './pages/Technologies'

function App() {


  return (
    <>
      <section className=' bg-gradient-to-r from-teal-200 to-white min-h-screen  ' >
        <Header />

        <Homes />
        <Technologies />
      </section>
    </>
  )
}

export default App
