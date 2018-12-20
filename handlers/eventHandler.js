const ShapeResponse = require('../multimodal_responses/shapeResponse');

module.exports = {
  canHandle: handlerInput => handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent',
  handle: handlerInput => ShapeResponse(handlerInput)
};
