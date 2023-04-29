const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const handle = require('../handlers/errorHandlers');

const { getUsers , setUsers, getUser} = require('../controllers/users');
// route that return a list of users
router.get('/users', auth, handle(getUsers));

// route that return a single user
router.get('/users/:id', auth, handle(getUser));

// route that create a new user
router.post('/users', auth, handle(setUsers));


module.exports = router;
