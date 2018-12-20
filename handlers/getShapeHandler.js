const Handler = require('../helpers/handler');
const ShapeResponse = require('../multimodal_responses/shapeResponse');

const ShapeRequestHandler = Handler('GetShapeIntent', handlerInput => ShapeResponse(handlerInput));

module.exports = ShapeRequestHandler;