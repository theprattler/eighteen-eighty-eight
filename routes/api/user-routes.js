const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// USER ROUTES

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:usersId
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// FRIEND ROUTES

// /api/users/:usersId/friends/:friendId


module.exports = router;