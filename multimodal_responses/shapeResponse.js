
const ShapeDirective = require('../documents/shape');
const shapeData = require('../data/shapes.json');

module.exports = (handlerInput, speak = true) => {
  let shape = shapeData[Math.floor(Math.random() * shapeData.length)];
  let speech = shape.description;
  if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']) {
    return handlerInput.responseBuilder
      .addDirective(ShapeDirective(shape))
      .speak(speak && speech)
      .withShouldEndSession(false)
      .getResponse();
  } else {
    return handlerInput.responseBuilder
      .speak(speech)
      .withShouldEndSession(false)
      .getResponse();
  }
};
