import { useEffect, useState } from "react"
import "./App.css"
import Card from "./Card"
const url = "/api/v1/cards"

export default function CardContainer() {
  const[isLoading, setIsLoading] = useState(false)
  const[cards, setCards] = useState([])
  
  useEffect (() => {
    setIsLoading(true)
    fetch(url).then((result) => {
      console.log(data)
      result
    }).then((data) => {
      setCards = data
      setIsLoading(false)
    })
  }, [])
  
  return (
    <>
      <div className="cardDisplay">
        <div>
          <h3>Creatures</h3>
          { isLoading ? <p>Loading</p> : { cards.map( (card, i) => {
                return <Card key={i}/>
              })}
            }
        </div>
        <div>
          <h3>Instants</h3>
            <div className="card">Card 1</div>
        </div>
      </div>
    </>
  )
}
