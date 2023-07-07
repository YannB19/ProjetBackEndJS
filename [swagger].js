const swaggerJsDoc = require('swagger-jsdoc');

const swaggerGeneration = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: 'anApi',
			version: '0.1.0'
		},
		servers: [
			{
				url: "http://localhost:8081/api/"
			},
		],
	},
	apis: 'src/routes/*.js'
};

const swaggerOptions = swaggerJsDoc(swaggerGeneration);