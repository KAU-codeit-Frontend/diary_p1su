import { RouterProvider } from 'react-router-dom'
import './App.css'
import Routes from './Router/route'

function App() {

  return (
    <>
      <RouterProvider router={Routes()} />
    </>
  )
}

export default App
