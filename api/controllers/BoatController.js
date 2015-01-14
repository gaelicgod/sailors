/**
 * BoatController
 *
 * @description :: Server-side logic for managing boats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */



module.exports = {
    create: function (req, res, next) {
        console.log("boat-data: ", req.params.all());
        
        var boatdata = {
            name: req.param('name'),
            owner: req.param('owner'),
            harbour: req.param('harbour'),
            boattype: req.param('boattype')
        };

        if (req.file('boatimage')) {
            req.file('boatimage').upload(function (err, uploadedFiles) {
                if (err) return res.send(500, err);
                console.log("Image Data: ", uploadedFiles);
                var uF = null;

                if(uploadedFiles.length > 1) {
                    uF = uploadedFiles[0];
                } else {
                    uF = uploadedFiles;
                }
                Upload.create(uF, function (err, upload) {
                    if (err) return next(err);

                    console.log("Upload: ", upload);

                    if(upload.id) boatdata.boatimage = upload.id;

                    if(upload[0] && upload[0].id) boatdata.boatimage = upload[0].id;
                    
                    console.log("BoatData: ", boatdata);

                    Boat.create(boatdata, function (err, boat) {
                        console.log("boat: ", boat);
                        if (err) {
                            console.log("err: ", err);
                            return next(err);
                        }

                        //res.json(boat);
                        res.redirect('/boats');    
                    });

                });
                
                // return res.json({
                //     message: uploadedFiles.length + ' file(s) uploaded successfully!',
                //     files: uploadedFiles
                // });
            });
        } else {
            Boat.create(boatdata, function (err, boat) {
                console.log("boat: ", boat);
                if (err) {
                    console.log("err: ", err);
                    return next(err);
                }

                //res.json(boat);
                res.redirect('/boats');    
            });
        }
    },
    read: function (req, res) {
        Harbour.find({ 
            sort: 'name ASC'
        },{
            fields: ['id', 'name']
        })
        .then(function (harbours) {
            console.log("harbours: ", harbours);

            var boats = Boat.find({
                sort: 'name ASC'
            },{
                fields: ['id', 'name', 'owner', 'createdAt']
            })
            .then(function (boats) {
                console.log("fresh boats: ", boats);
                return boats;
            });

            var boattypes = Boattype.find({
                sort: 'name ASC'
            },{
                fields: ['id', 'name']
            })
            .then(function(boattypes) {
                return boattypes;
            });

            return [harbours, boats, boattypes];
        })
        .spread(function (harbours, boats, boattypes) {

            res.view('boatList', {
                harbours: harbours,
                boats: boats,
                boattypes: boattypes
            });
        })
        .catch(function (err) {
            if (err) return res.serverError(err);
        });
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

