import React from 'react'
import ReactDom from 'react-dom/client'

const App = () => {
  return (
    <div className="App">
      <h1>Namaste React</h1>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<App />)
