const db = require('../config/config.db.firebase')

module.exports = {
    /**
     * liste tous les items
     * @param req
     * @param res
     * @returns {Promise<Promise<string> | * | this | void | boolean>}
     */
    indexCategorie: async (req, res)=>{
        try {
            let query = db.collection('items');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        item: doc.data().item
                    };
                    response.push(selectedItem);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    /**
     * create un item
     * @param req
     * @param res
     * @returns {Promise<Promise<string> | * | this | void | boolean>}
     */
    createCategorie: async (req, res)=>{
            try {
                await db.collection('items').add({item: req.body.item});
                return res.status(200).send(req.body);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
    },

    /**
     * consulter un item et un seul item
     * @param req
     * @param res
     * @returns {Promise<Promise<string> | * | this | void | boolean>}
     */
    showCategorie: async (req, res)=>{
        try {
            const document = db.collection('items').doc(req.params.item_id);
            let item = await document.get();
            let response = item.data();
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    /**
     * mettre à jour un item
     * @param req
     * @param res
     * @returns {Promise<Promise<string> | * | this | void | boolean>}
     */
    updateCategorie : async (req, res)=>{
        try {
            const document = db.collection('items').doc(req.params.item_id);
            await document.update({
                item: req.body.item
            });
            return res.status(200).send(req.body.item);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    /**
     * Supprimer un item
     * @param req
     * @param res
     * @returns {Promise<Promise<string> | * | this | void | boolean>}
     */
    deleteCategorie: async(req, res)=>{
        try {
            const document = db.collection('items').doc(req.params.item_id);
            await document.delete();
            return res.status(200).send("deleted");
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

}