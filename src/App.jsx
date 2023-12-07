import { useState } from 'react'
import './App.css'
import { CardFollowUsers } from './cardFollowUsers.jsx'

export function App () {
    const [name, setName] = useState('Yaryes')
    console.log('render with name: ', name)
    return(
        // Llevamos el contenedor del cardFollowUsers a un nivel de aplicacion          
        // para que se agrupe dependiendo donde se utilice
        <section className="App">
            <CardFollowUsers userName={name}> Carlos Antonio Yaryes </CardFollowUsers>
            <CardFollowUsers userName="Midudev" > Miguel Angel </CardFollowUsers>
            <button onClick={() => setName('ArturoVidal')}>Cambiar Nombre</button>
        </section>
    )
} 
