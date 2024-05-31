import { useState } from "react"
import "../App.css"

export default function Card ({ imgUrl }) {
  const [hidden, setHidden] = useState(false)

  const toggleVis = () => {
    setHidden(!hidden)
  }
  return (
    <>
      <div className="card" onClick={toggleVis}>
        <img src={imgUrl}/>
      </div>
      {/* <div className="modal" onClick={toggleVis} style={{ "display": hidden ? "block":"none"}}>
        <p className="modal-content">
        Some text in the Modal..
        </p>
      </div> */}
    </>
  )
}