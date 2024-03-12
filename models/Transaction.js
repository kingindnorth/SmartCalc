const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    type: { 
        type: String,
        enum: ['cash-in', 'cash-out']
    },
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    name:{
        type:String
    },
    mode:{
        type:String
    },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Transaction",TransactionSchema)