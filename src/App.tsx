import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Inner from './components/Inner'
import Dash from './components/Dash'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className = 'main-container'>
        <div>
        <Sidebar />
        </div>
        <div style={{display : 'flex' , flexDirection : 'column'}}>
          <Navbar />
          <div style={{height : '1080px' , width : '1000px' , padding : '5px'}}>
            <Routes>
                <Route path = '/' element = {<Inner />}/>
            </Routes>
            <Dash />
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App