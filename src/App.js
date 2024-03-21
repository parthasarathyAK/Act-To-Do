import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/signup'
import Landing from './pages/Landing';
import { useState } from 'react';



function App() {
  const [users, setusers] = useState([
    {
      username: "partha",
      password: "123"
    }]
  )


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} ></Login>}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
          <Route path='/landing' element={<Landing></Landing>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
