const twikoo = require('./twikoo')

module.exports = async (req, res) => {
  await twikoo.handler(req, res)
}
