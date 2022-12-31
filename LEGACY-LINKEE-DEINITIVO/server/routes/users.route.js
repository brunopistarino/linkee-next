const User = require("../models/user");
const Section = require("../models/section");
const Link = require("../models/link");

const router = require("express").Router();
// const auth = require("../middleware/auth");

// POST /users
router.post("/", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// // GET /users/me
// router.get("/me", auth, async (req, res) => {
//   res.send(req.user);
// });

// GET /users/:id
router.get("/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
