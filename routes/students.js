const router = require("express").Router();
let student = require("../models/student");

////////////////student add////////////////////////
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

/////////////////Student get///////////////////////

router.route("/get").get((req, res) => {
  student
    .find()
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      console.log(err);
    });
});

///////////////////Student Update////////////////////

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await student
    .findByIdAndUpdate(userId, updateStudent)
    .then((student) => {
      res.status(200).send({ status: "user updated",student });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

/////////////////////Student Delete///////////////////

router.route('/delete/:id').delete(async(req,res)=>{
    let userId = req.params.id;

    await student.findByIdAndDelete(userId).then((student)=>{
        res.status(200).send({status:"student deleted",student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"delete error",Error:err.message})
    })
})

//////////////////////////get by Id/////////////////

router.route('/get/:id').get(async(req,res)=>{
  let userId= req.params.id;
  const user =await student.findById(userId).then((student)=>{
    res.status(200).send({status:"user feteched",student})
  }).catch((err)=>{
     console.log(err.message);
     res.status(500).send({status:"error with get user", error:err.message})
  })
})

module.exports = router;
