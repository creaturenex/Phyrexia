const mtg = require("mtgsdk")

module.exports = {
  getCards: async function (req, res, next) {
    try {
      const result = await mtg.card.where({set: "ONE",})
      res.locals.set = await result.map(card => {
        return {
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
          "imageUrl": card.imageUrl,
          }})
      return next()
    } catch (err) {
      return next(err)
    }
  }, 

}
