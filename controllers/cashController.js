const Transaction = require("../models/Transaction")

const cashIn = async (req,res) => {
    try{
        console.log(req.body)
        const { name,mode,details,amount } = req.body;
        const transaction = new Transaction({
        type: 'cash-in',
        amount: amount,
        description: details,
        name:name,
        mode:mode
        })
        await transaction.save();
        res.json({
            status:200,
            message:"Cash-in transaction added successfully"
        })

    }catch(err){
        console.log(err)
        res.json({
            status:500,
            error:err.message
        })
    }
}

const cashOut = async (req,res) => {
    try {
        console.log(req.body)
        const { name,mode,details,amount } = req.body;
        const transaction = new Transaction({
        type: 'cash-out',
        amount: amount,
        description: details,
        name:name,
        mode:mode
        })
        await transaction.save();
        res.json({
            status:200,
            message: 'Cash-out transaction added successfully' 
        });
    } catch (err) {
        console.log(err)
        res.json({ 
            status:500,
            error: err.message 
        });
    }
}

const fetchTransactionsByDate = async (req,res) => {
    try {
        const requestedDate = new Date(req.body.date);
        const startOfDay = new Date(requestedDate.getFullYear(), requestedDate.getMonth(), requestedDate.getDate());
        const endOfDay = new Date(requestedDate.getFullYear(), requestedDate.getMonth(), requestedDate.getDate() + 1);
        console.log(requestedDate,startOfDay,endOfDay)
        const transactionsForDate = await Transaction.find({
            timestamp: { $gte: startOfDay, $lt: endOfDay }
        });
        res.json({
            status:200,
            message:transactionsForDate
        });
    } catch (error) {
        res.json({
            status:500, 
            error: error.message 
        });
    }
}

module.exports = {
    cashIn,
    cashOut,
    fetchTransactionsByDate
}