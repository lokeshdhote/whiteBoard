import { useState } from 'react'


import './App.css'
import Home from "./Components/Home"
import Register from "./Forms/register"
import LogIn from "./Forms/logIn.jsx"
import BoardPage from "./Components/BoardPage.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (

<div className='flex  gap-[2vw]   '>
{/* <Register/> */}
{/* <LogIn/> */}
  {/* <Home/> */}
< BoardPage/>
</div>
  )
}

export default App
