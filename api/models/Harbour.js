/**
* Harbour.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        required: true,
        type: 'string',
        unique: true
    },
    location: 'string',
    boats: {
        collection: 'boat',
        via: 'harbour'
    }
  }
};

