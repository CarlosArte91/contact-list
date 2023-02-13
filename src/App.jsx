import { useState } from 'react'
import './App.css'
import ContactList from './components/layout/contact_list/contact_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<ContactList />
    </div>
  )
}

export default App
