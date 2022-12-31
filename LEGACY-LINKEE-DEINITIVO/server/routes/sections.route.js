const User = require("../models/user");
const Section = require("../models/section");
const Link = require("../models/link");

const router = require("express").Router();

// GET /sections
router.get("/", async (req, res) => {
  try {
    // const sections = await Section.find({ user: req.user._id });
    const sections = await Section.find();
    res.send(sections);
  } catch (e) {
    res.status(500).send();
  }
});

// GET /sections/:id
router.get("/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    // const section = await Section.findOne({ _id, user: req.user._id });
    const section = await Section.findOne({ _id });

    if (!section) {
      return res.status(404).send();
    }

    res.send(section);
  } catch (e) {
    res.status(500).send();
  }
});

// POST /sections
router.post("/", async (req, res) => {
  console.log(req.body);
  // const section = new Section({
  //   ...req.body,
  //   user: req.user._id,
  // });

  const section = new Section({
    emoji: req.body.emoji,
    name: req.body.name,
    // user: req.user._id,
    user: "asdsadsadasd",
  });

  try {
    await section.save();
    res.status(201).send(section);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

module.exports = router;
