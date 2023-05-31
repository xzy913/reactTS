import { useState } from 'react'
import { Link,Outlet,useRoutes} from "react-router-dom"
import router from './router'
function App() {
  const [count, setCount] = useState(0)
  const element =useRoutes(router)
  return (
    <div className='App'>
     {element}
    </div>
  )
}

export default App
