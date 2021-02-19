const { Router } = require('express')
const productsRouter = require('./products');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/motorcycles', productsRouter);

module.exports = router