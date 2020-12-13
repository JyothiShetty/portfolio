import React from 'react'
import Navigation from "./Components/Navigation"
import Home from"./Components/Home"
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navigation/>
      <Home/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App;
