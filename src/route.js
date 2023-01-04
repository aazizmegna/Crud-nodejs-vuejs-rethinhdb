const { Router } = require("express"),
  bodyParser = require("body-parser");
  port = 3080;

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("./services");

const router = Router();

router.use(bodyParser.json());

/**
 * User
 */

//Create
router.post("/createuser", async (req, res) => {
  try {
    const value = req.body;
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

//Read by id
router.get("/listusers/:id", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    found = users.find((t) => {
      return t.id === req.params.id;
    });
    res.send({
      msg: "User fetched successfully",
      found,
    });
  } catch (error) {
    next(error);
  }
});

//update user
router.put("/update/:id", async (req, res, next) => {
  id = req.params.id;
  const update = req.body;
  try {
    const result = await updateUser(id, update);
    res.send({
      msg: "User updated successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//delete user
router.delete("/delete/:id", async (req, res, next) => {
  id = req.params.id;
  try {
    await deleteUser(id);
    res.send({
      msg: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router