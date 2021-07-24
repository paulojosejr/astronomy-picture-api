import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import './App.css'

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div className="container">
      <div className="main">
        
        <h1>NASA API</h1>
        <h2>Astronomy Picture of the Day</h2>
        {apod && (
          <article>
            <header>
              {apod.title} - <i>{apod.date}</i>
            </header>
            <img className="mainImage" src={apod.url} alt="APOD"/>
            <p className="mainText">{apod.explanation}</p>
            <hr />
          </article>
        )}
      </div>
    </div>
  )
}

export default App