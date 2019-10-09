const con = require('./banco');

class BancoUtils {
    static insert(obj, tb){
        con.query(`INSERT INTO ${tb} SET ?`, obj, (err,res) => {
            if(err){
                throw err;
            } else {
                return res;
            }
        });
    }
}

module.exports = BancoUtils;