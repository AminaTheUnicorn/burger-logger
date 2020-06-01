const connection = require("./connection");

let orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertAll: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO" + table;

        queryString += " VALUES";
        queryString += cols.toString();
        queryString += ") ";
    
    
        console.log("insert:" + queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    // updateOne: function (table, condition, cb) {
    //     var queryString = "UPDATE " + table;

    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);
    //     queryString += " WHERE ";
    //     queryString += condition;
    
    //     console.log("update:" + queryString);
    //     connection.query(queryString, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    //   }
}

module.exports = orm;