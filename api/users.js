const router = require("express").Router();
const { User } = require("../models");


router.get('/', (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

router.get('/:id', (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json();
})

router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.send(`user created: ${newUser}`);
})

router.put('/:id', async (req, res) => {
    const updatedUser = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(`user with id ${req.params.id} has been updated: ${updatedUser}`)
})

router.delete('/:id', async (req, res) => {
    const user = await User.destroy({
        where:{
            id: req.params.id
        }
    })
    res.send(`User deleted: ${user}`);
})

module.exports = router;