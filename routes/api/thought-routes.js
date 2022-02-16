const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, removeThought } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
  .get(getAllThought)
  .post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getThoughtById);

// /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId')
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions

module.exports = router;