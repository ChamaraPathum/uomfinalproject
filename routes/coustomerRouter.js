const router = require("express").Router();
let coustomer = require("../models/coustomer");

////////////////coutomer add////////////////////////
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const address =req.body.address;
  const email = req.body.email;
  const dateOfBirth = req.body.dateOfBirth;
  const gender = req.body.gender;
  const age = req.body.age;
  const cardHolderName = req.body.cardHolderName;
  const cardNumber = req.body.cardNumber;
  const expiryDate = req.body.expiryDate;
  const cvv = req.body.cvv;
  const timeStamp = req.body.timeStamp;

  const newCoustomer = new coustomer({
    name,
    address,
    email,
    dateOfBirth,
    gender,
    age,
    cardHolderName,
    cardNumber,
    expiryDate,
    cvv,
    timeStamp
  });

  newCoustomer
    .save()
    .then(() => {
      res.status(201).json("message : "+ req.body.name + " has registered. ");
    })
    .catch((err) => {
        res.status(400).json("invalid request message framing");
      console.log(err);
    });
});

// /////////////////coutomer get///////////////////////

router.route("/get").get((req, res) => {
  coustomer
    .find()
    .then((coustomer) => {
      res.json(coustomer);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
