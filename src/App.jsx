import { useState } from 'react'
import './App.css'
 
 import RootLayouts from '/src/Components/Layouts/RootLayouts' 
import Home from './Components/Pages/Home'
import Shop from './Components/Pages/Shop'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Routes>
<Route path='/' element={<RootLayouts />}>
<Route index element={<Home />} />
<Route path='shop' element={<Shop/>}/>

</Route>
</Routes>
    </>
  )
}

export default App
