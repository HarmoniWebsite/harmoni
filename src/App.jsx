import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import ScrollToTop from './components/scrollToTop'

import { Route, Routes } from 'react-router'

function App() {



  return (
    <div className='containerM'>
      <ScrollToTop />
      <Routes basename='/'>
        <Route index element={<Home />} />
        <Route path='contact-us' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App