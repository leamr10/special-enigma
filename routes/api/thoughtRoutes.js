const router = require('express').Router();
const {
    createThought,
    getSingleThought,
    getAllThoughts,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,
} = require('../../controllers/thoughtController')

router 
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.post('/:thoughtId/reactions', createReaction);

router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;