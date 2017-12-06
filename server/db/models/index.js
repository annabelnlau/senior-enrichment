'use strict';

const db = require('../index');
const Sequelize = require('sequelize')

// const Student = require('./student')
// const Campus = require('./campus')

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg'
	},
	description: {
		type: Sequelize.TEXT
	}
})

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
	},

})

Student.belongsTo(Campus)

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations

module.exports = {
	db: db,
	Student: Student,
	Campus: Campus
}
