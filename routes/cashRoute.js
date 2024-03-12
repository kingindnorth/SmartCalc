const { cashIn, cashOut, fetchTransactionsByDate } = require("../controllers/cashController")

const router = require("express").Router()

router.post("/cash-in", cashIn)
router.post("/cash-out", cashOut)
router.post("/transactions", fetchTransactionsByDate)


module.exports = router