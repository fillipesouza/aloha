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

    static select(tb, cb){
        con.query(`SELECT * FROM ${tb}`, (err,res) => {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = BancoUtils;