import BloodDonations from './data/BloodDonations'

import { useState } from 'react'
import './App.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='container app-content'>
      <Navbar />
      <Home />
      {BloodDonations.map(data => 
      (
        <Blog key={data.id}
              postDate={data.postDate}
              postPlace={data.postPlace}
              post={data.post}
         />
      ) 
      )}
      <Footer />
    </div>
    
  )
}

export default App
