module.exports = (app, db) => {
    app.get("./db/getairline/:id" , (req , res) => {
        db.airline.find({userId: req.params.id}, function(err, result){
            if(err){
                throw err;
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
};