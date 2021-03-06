'use strict';

const lettersService = require('../services/lettersService');

function parseLetter(req) {
  return {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      postCode: req.body.postCode
  };
}

function send(req, res) {
  let newLetter = parseLetter(req);

  return lettersService.createLetter(newLetter)
    .then(() => {
      return res.sendStatus(201);
    })
    .catch(() => {
      return res.status(400).send("letter creation failed");
    });
}

module.exports = {
  send: send
};
