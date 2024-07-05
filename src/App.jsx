import { BrowserRouter as Router, Route, Routers } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TaskContainer from './components/TaskContainer'
import { GlobalContextProvider } from './context/context'
import HomePage from './components/HomePage' 
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import User from './components/User'

function App() {
  return (
    <div>
      <Router>
        <Routers>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/logIn' element={<LogIn/>}></Route>
          <Route path='/user' element={<User/>}></Route>
        </Routers>
      </Router>
    </div>

    // <GlobalContextProvider>
    //   <HomePage />
    //   {/* <Header />
    //   <TaskContainer /> */}
    // </GlobalContextProvider>
  )
}

export default App
