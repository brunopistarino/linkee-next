const User = require("../models/user");
const Section = require("../models/section");
const Link = require("../models/link");

const router = require("express").Router();

// GET /sections
router.get("/", async (req, res) => {
  try {
    const sections = await Section.find({ user: req.user._id });
    res.send(sections);
  } catch (e) {
    res.status(500).send();
  }
});

// GET /sections/:id
router.get("/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const section = await Section.findOne({ _id, user: req.user._id });

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
  const section = new Section({
    ...req.body,
    user: req.user._id,
  });

  try {
    await section.save();
    res.status(201).send(section);
  } catch (e) {
    res.status(400).send(e);
  }
});

// PATCH /sections/:id
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const section = await Section.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!section) {
      return res.status(404).send();
    }

    updates.forEach((update) => (section[update] = req.body[update]));
    await section.save();
    res.send(section);
  } catch (e) {
    res.status(400).send(e);
  }
});

// DELETE /sections/:id
router.delete("/:id", async (req, res) => {
  try {
    const section = await Section.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!section) {
      res.status(404).send();
    }

    res.send(section);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
