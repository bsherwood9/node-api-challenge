const express = require("express");

const actionDb = require("../helpers/actionModel.js");

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDb
    .get(id)
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error: "There was a problem", err });
    });
});

router.get("/", (req, res) => {
  // const { id } = req.params;
  actionDb
    .get()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ error: "There was a problem", err });
    });
});

router.post("/:id", (req, res) => {
  const body = req.body;
  body.project_id = req.params.id;
  actionDb
    .insert(body)
    .then(post => {
      console.log(post);
      res.status(200).json(post);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "There was a problem creating that post", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  actionDb
    .remove(id)
    .then(removed => {
      res.status(200).json({ message: `You removed post ${id}`, removed });
    })
    .catch(err => {
      message: "There was an error removing that post";
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  // body.project_id = req.params.id;
  actionDb
    .update(id, req.body)
    .then(updated => {
      res.status(200).json({ message: `You updated post ${id}`, updated });
    })
    .catch(err => {
      message: "There was an error updating that post";
    });
});

module.exports = router;
