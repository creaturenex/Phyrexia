const mtg = require("mtgsdk")

module.exports = {
  getCards: async function (req, res, next) {
    try {
      const result = await mtg.card.where({set: "ONE",})
      // res.locals = result
      res.locals.set = await result.map(card => {
        return {
          "name": card.name,
          "rarity": card.rarity
        }});

      return next()
    } catch (err) {
      return next(err)
    }
  }, 

}
