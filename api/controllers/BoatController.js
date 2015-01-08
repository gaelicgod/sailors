/**
 * BoatController
 *
 * @description :: Server-side logic for managing boats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */



module.exports = {
    create: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
    read: function (req, res) {
        Harbour.find({ 
            sort: 'name ASC'
        },{
            fields: ['id', 'name']
        })
        .then(function (harbours) {
            var boats = Boat.find({},{
                fields: ['id', 'name']
            })
            .then(function (boats) {
                return boats;
            });
            return [harbours, boats];
        })
        .spread(function (harbours, boats){
            console.log("Harbours: ", harbours);
            console.log("Boats: ", boats);
            res.view('boatList', {
                harbours: harbours,
                boats: boats
            });
        })
        .catch(function (err) {
            if (err) return res.serverError(err);
        }); 

        // .exec(function (err, harbours) {
        //     if (err) return res.serverError(err);
        //     console.log("Habours: ", harbours);
        //     res.view('boatList', {
        //         harbours: harbours
        //     });
        // });
    },
    update: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        }); 
    },
    destroy: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    }
};

