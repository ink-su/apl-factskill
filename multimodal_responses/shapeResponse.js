
const ShapeDirective = require('../documents/shape');
const shapeData = require('../data/shapes.json');
const skill = require('../data/skill.json');

module.exports = (handlerInput, speak = true) => {
  let shape = shapeData[Math.floor(Math.random() * shapeData.length)];
  let speech = shape.description + ' ' + skill.reprompt;
  if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']) {
    return handlerInput.responseBuilder
      .addDirective(ShapeDirective(shape))
      .speak(speak && (speech + "  Or click the screen."))
      .reprompt(skill.reprompt)
      .withShouldEndSession(false)
      .getResponse();
  } else {
    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(skill.reprompt)
      .withShouldEndSession(false)
      .getResponse();
  }
};
