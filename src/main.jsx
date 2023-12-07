import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

// const Button = ({text}) => {
//   return (
//     <button>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//       <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
//       </svg>
//       {text}
//     </button>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {/* {Button({ text: 'Button 1'})}
    {Button({ text: 'Button 2'})}
    {Button({ text: 'Button 3'})} */}
    <App/>
  </React.Fragment>

)

