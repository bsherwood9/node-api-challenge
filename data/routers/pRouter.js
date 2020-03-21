const express = require("express");

const projectDb = require("../helpers/projectModel.js");

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .get(id)
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error: "There was a problem", err });
    });
});

router.get("/pog/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .getProjectActions(id)
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was a problem finding those actions", err });
    });
});
router.get("/", (req, res) => {
  projectDb
    .get()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was a problem finding the projects", err });
    });
});

router.post("/", (req, res) => {
  // const { id } = req.params;
  projectDb
    .insert(req.body)
    .then(project => {
      res.status(200).json({ project });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was a problem creating that project", err });
    });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .update(id, req.body)
    .then(updates => {
      res.status(200).json({ updates });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was an error updating the project", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectDb
    .remove(id)
    .then(removed => {
      console.log(removed);
      res.status(200).json({ removed });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was a problem deleting that project", err });
    });
});

module.exports = router;
