const mtg = require("mtgsdk")
const fs = require("node:fs")
const cards = []
module.exports = {
  fetchCards: async function (req, res, next) {
    try {
      mtg.card.all({set: "ONE"})
        .on('data', (card) => {
          cards.push({
            "name": card.name,
            "manaCost": card.manaCost,
            "cmc": card.cmc,
            "colors": card.colors,
            "colorIdentity": card.colorIdentity,
            "type": card.type,
            "supertypes": card.supertypes,
            "types": card.types,
            "subtypes": card.subtypes,
            "rarity": card.rarity,
            "text": card.text,
            "power": card.power,
            "toughness": card.toughness,
            "layout": card.layout,
            "imageUrl": card.imageUrl
            })
        })
        .on('end', () => {
          // fs.writeFile("cards.txt", cards, ()=>{
          //   console.log('Done writing')
          // })
          res.locals.set = cards
          next()
        })    
    } catch (err) {
      return next(err)
    }
  }, 

}
