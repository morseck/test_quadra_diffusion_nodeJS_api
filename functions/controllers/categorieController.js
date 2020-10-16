const db = require('../config/config.db.firebase')

module.exports = {
    createCategorie: async (req, res)=>{
            try {
                await db.collection('items').add({item: req.body.item});
                return res.status(200).send(req.body);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
    }
}