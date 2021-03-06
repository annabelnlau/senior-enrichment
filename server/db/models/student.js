'use strict'

const Sequelize = require('sequelize')
const db = require('../index')
const Campus = require('./campus')

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.VIRTUAL,
		get() {
			return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
		}
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true,
		allowNull: false
	},
	gpa: {
		type: Sequelize.DECIMAL,
		allowNull: false,
		validate: {min: 0.0, max: 4.0}
	}
})

Student.belongsTo(Campus)

module.exports = Student
