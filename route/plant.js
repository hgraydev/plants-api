var Plant = require('../models').plan;
var Propertie = require('../models').propertie;

var cerrors = require('../function/custom-errors');

module.exports = function(app) {
  /*
    curp:
    rfc:
    password:  1 Mayuscula, 1 Numero, 1 special character Min 8 characters, Max 15 characters
    repeat_password: Compare same string as repeat_password.
    birthday: in format yyyy-mm-dd
    phone: 01-000-0000000
           01-272-1472103
    cellphone: 000-000-0000000
    hour: hh:00

    trim() trims characters (whitespace by default) at the beginning and at the end of a string
    escape() replaces <, >, &, ', " and / with their corresponding HTML entities
  */

 
// CREATE
  app.post('/plant/new', (req, res) => {
    let { name } = req.body;
    Plant.create({ name }).then ( result => {
      res.json({ result });
    }).catch( err =>{
      let e = cerrors.getErrors(err);
      res.json({ errors: e });
    })
  })
//READ ALL
  app.get('/plants', (req, res) => {
    Plant.findAll().then( result => {
      res.json( result );
    }) .catch( err => {
      let e = cerrors.err();
      res.json({ errors: e })
    })
  })
//READ ONE by id, you can change the filter.
  app.get('/plant/:id', (req, res) => {
    Plant.find({ where: { uuid: req.params.id } , include:[ { model: Propertie }] })
    .then( result => { res.json(result) }).catch( err => { res.json( err ) })
  })
// UPDATE
  app.put('/plant/:id', (req, res) => {
    let { name } = req.body;
    let id = req.params.id;
    Plant.findByPk(req.params.id)
    .then( plant => {
      return plant.update({ name })
      .then(()=> res.json( plant ))
      .catch( err => {
        let e = cerrors.err();
        res.json({ errors: e })
      })
    })
    .catch( err => {
      res.json( err );
    })
  })
//
  app.delete('/plant/:id', (req, res) => {
    Plant.destroy({ where: { uuid: req.params.id } })
    .then( result => {
      res.json( result );
    })
    .catch( err => {
      let e = cerrors.err();
      res.json({ errors: e })
    })
  })
}
