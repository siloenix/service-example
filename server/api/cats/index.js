const { Router } = require('express')
const controller = require('./cats.controller');

const router = new Router();

router.get('/', controller.getMany);
router.post('/', controller.create);

router.get('/:name', controller.getOne);
router.put('/:name', controller.update);
router.delete('/:name', controller.delete);

module.exports = router;
