import Navbar from './components/Navbar'
import { Cards } from './components/Cards'
import data from './api/data'
import './styles/card.css'; import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RouteCall from './components/Route';
function App() {

  return (
    <>

      <RouteCall />

    </>
  )
}

export default App
