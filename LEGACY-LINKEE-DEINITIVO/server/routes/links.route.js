const User = require("../models/user");
const Section = require("../models/section");
const Link = require("../models/link");

const router = require("express").Router();

// // POST /links
// router.post("/", auth, async (req, res) => {
//   const link = new Link({
//     ...req.body,
//     user: req.user._id,
//   });

//   try {
//     await link.save();
//     res.status(201).send(link);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// // GET /links
// router.get("/", auth, async (req, res) => {
//   try {
//     const links = await Link.find({ user: req.user._id });
//     res.send(links);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// GET /links
router.get("/", async (req, res) => {
  try {
    const links = await Link.find({ section: req.section });
    res.send(links);
  } catch (e) {
    res.status(500).send();
  }
});

// // GET /links/:id
// router.get("/:id", auth, async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const link = await Link.findOne({ _id, user: req.user._id });

//     if (!link) {
//       return res.status(404).send();
//     }

//     res.send(link);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

module.exports = router;
