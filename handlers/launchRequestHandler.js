const LaunchDirective = require('../documents/launch');
const skill = require('../data/skill.json');

module.exports = {
  canHandle: (handlerInput) => handlerInput.requestEnvelope.request.type === 'LaunchRequest',
  handle: (handlerInput) => {
    if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']) {
      return handlerInput.responseBuilder
        .addDirective(LaunchDirective())
        .speak(skill.welcome +' Click to explore!.')
        .reprompt(skill.hint)
        .withShouldEndSession(false)
        .getResponse();
    } else {
      return handlerInput.responseBuilder
        .speak(skill.welcome)
        .reprompt(skill.hint)
        .withShouldEndSession(false)
        .getResponse();
    }
  }
};
