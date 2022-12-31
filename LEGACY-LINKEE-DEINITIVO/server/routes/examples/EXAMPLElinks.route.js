const User = require("../models/user");
const Section = require("../models/section");
const Link = require("../models/link");

const router = require("express").Router();

// POST /links
router.post("/", auth, async (req, res) => {
  const link = new Link({
    ...req.body,
    user: req.user._id,
  });

  try {
    await link.save();
    res.status(201).send(link);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /links
router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ user: req.user._id });
    res.send(links);
  } catch (e) {
    res.status(500).send();
  }
});

// GET /links/:id
router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const link = await Link.findOne({ _id, user: req.user._id });

    if (!link) {
      return res.status(404).send();
    }

    res.send(link);
  } catch (e) {
    res.status(500).send();
  }
});

// PATCH /links/:id
router.patch("/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "url", "section"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const link = await Link.findOne({ _id: req.params.id, user: req.user._id });

    if (!link) {
      return res.status(404).send();
    }

    updates.forEach((update) => (link[update] = req.body[update]));
    await link.save();
    res.send(link);
  } catch (e) {
    res.status(400).send(e);
  }
});

// DELETE /links/:id
router.delete("/:id", auth, async (req, res) => {
  try {
    const link = await Link.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!link) {
      res.status(404).send();
    }

    res.send(link);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
