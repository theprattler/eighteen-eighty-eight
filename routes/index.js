const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('Uh-oh - there has been a 404 Error!');
});

module.exports = router;