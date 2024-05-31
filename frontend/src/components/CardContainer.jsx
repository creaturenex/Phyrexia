import { useEffect, useState } from "react"
import Card from "./Card"

const url = "/api/v1/cards"

export default function CardContainer() {
  const[isLoading, setIsLoading] = useState(false)
  const[cards, setCards] = useState([])
  
  useEffect (() => {
    setIsLoading(true)
    fetch(url).then(()=>{

    }).then(()=>{
  

    })

  }, [])
  
  return (
    <>
    {cards.map((card, i)=>{
      return <Card key={i}/>
    })}
    </>
  )
}