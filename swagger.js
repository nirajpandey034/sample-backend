
const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        title: 'Sample Backend',
        description: 'Sample backend for beginner frontend developers (Web/Mobile)'
    },
    host: 'fair-tick-pleat.cyclic.app',
    basePath: '/',
    schemes:['https'],
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
})