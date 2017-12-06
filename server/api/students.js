const apiRouter = require('express').Router();
const {Student, Campus} = require('../db/models');

module.exports = apiRouter;

apiRouter.get('/', (req, res, next) => {
    Student.findAll({
        include: [{model: Campus}]
    })
    .then(studentsWithCampuses => res.json(studentsWithCampuses))
    .catch(next);
})

apiRouter.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
    .then(foundStudent => res.json(foundStudent))
    .catch(next);
})

apiRouter.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(newStudent => res.json(newStudent))
    .catch(next);
})

apiRouter.put('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
    .then(foundStudent => foundStudent.update(req.body))
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next)
})

apiRouter.delete('/:studentId', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
    .then(() => res.send('Student has been successfully deleted from the database!'))
    .catch(next)
})
