import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Header from './components/Header'


function App() {
 
  return (
    <>
      <Header/>
      <Menu/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
