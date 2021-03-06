/**
* Boat.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        required: true,
        type: 'string'
    },

    owner: {
        type: 'string',
        required: true
    },

    boatimage: {
        model: 'upload'
    },

    harbour: {
        model: 'harbour',
        required: true
    },

    boattype: {
        model: 'boattype',
        required: true
    }
  }
};

