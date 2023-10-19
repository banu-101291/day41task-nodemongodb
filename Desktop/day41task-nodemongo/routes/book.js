const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/get", (req, res) => {
  Book.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.post("/", (req, res) => {
  const {title , description}=req.body
   console.log(req.body.title, req.body.description);
  const book = new Book({
    title, 
    description 
  });

  book.save()
    .then((data) => {
      res.status(201).json(data);
    
    })
    .catch((e) => {
      res.status(500).json({ message: e });
    });
});

router.delete("/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.patch("/:id", (req, res) => {
  Book.updateOne(
    { _id: req.params.id },
    {
      $set: { description: req.body.description },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

module.exports = router;