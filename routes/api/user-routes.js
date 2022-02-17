const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// USER ROUTES

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// FRIEND ROUTES

// /api/users/:usersId/friends/:friendId
router
  .route('/:usersId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;