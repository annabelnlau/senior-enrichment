const apiRouter = require('express').Router();
const {Campus, Student} = require('../db/models');

module.exports = apiRouter;

apiRouter.get('/', function(req, res, next) {
    Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

apiRouter.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
    .then(foundCampus => res.json(foundCampus))
    .catch(next);
})

apiRouter.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(newCampus => res.json(newCampus))
    .catch(next);
})

apiRouter.put('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
    .then(foundCampus => foundCampus.update(req.body))
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next)
})

apiRouter.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
    .then(() => res.send('Campus has been successfully deleted!'))
    .catch(next)
})
