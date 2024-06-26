import { useEffect, useState } from "react"
import "../App.css"
import Card from "./Card"
const url = "/api/v1/cards"

export default function CardContainer() {
  const[isLoading, setIsLoading] = useState(false)
  const[cards, setCards] = useState([])
  
  useEffect (() => {
    setIsLoading(true)
    fetch(url)
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        console.log(data.set)
        setCards(data.set)
        setIsLoading(false)
      })
  }, [])
  
  return (
    <>
      <div className="cardDisplay">
        <div>
          <h3>Creatures</h3>
          <div className="cardType">  { cards.map((card, i) => (
            <Card key={i} id={i} imgUrl={card.imageUrl} />
          ))}
          </div>
        </div>
        <div>
          <h3>Instants</h3>
            <div className="card">Card 1</div>
        </div>
      </div>  
    </>
  )
}
