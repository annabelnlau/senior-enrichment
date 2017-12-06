'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

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

module.exports = Campus

