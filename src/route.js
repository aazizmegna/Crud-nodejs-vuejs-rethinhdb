const { Router } = require("express"),
  bodyParser = require("body-parser");
  port = 3080;

const {createUser, getAllUsers} = require('./services')

const router = Router()

router.use(bodyParser.json());


/**
 * User
 */

//Create
router.post("/createuser", async (req, res) => {
  try {
    const value = req.body.user;
      const result = await createUser(value);
      res.send({
        msg: "User created successfully",
        result,
      });
  } catch (error) {
    console.error(error);
  }
});

//Read
router.get("/listusers", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({
      msg: "User fetched successfully",
      users,
      });
  } catch (error) {
    next(error);
  }
});

//update user
router.put('/update/:id', () =>{})

//delete user
router.delete('/delete/:id', () =>{})

module.exports = router