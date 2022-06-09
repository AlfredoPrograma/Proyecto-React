import './App.scss'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import PersonalCard from './components/PersonalCard/PersonalCard'

const NOMBRE = 'REACT'

function App() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(jsonRes => setUsers(jsonRes))
  }, [])
  

  console.log(users) // [] ==> [...res]

  return (
    <div className='container'>
      <Header nombre={NOMBRE} />

      <section>
        {
          users.length === 0 ?
          <h1>No hay usuarios</h1>
          :
          <div>
            {
              users.map(user => <PersonalCard nombre={user.name} email={user.email} telefono={user.phone} />)
            }
          </div>
        }
      </section>
    </div>
  )
}

export default App
