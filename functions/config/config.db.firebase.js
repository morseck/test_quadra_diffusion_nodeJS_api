var admin = require("firebase-admin");
var serviceAccount = require("../permission");

module.exports = (()=>{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://test-quadra-diffusion.firebaseio.com"
    });

    const db = admin.firestore();
return db
})();




//export default db;