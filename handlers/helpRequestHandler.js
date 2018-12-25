const Handler = require('../helpers/handler');
const skill = require('../data/skill.json')
const HelpRequestHandler = Handler('AMAZON.HelpIntent', handlerInput => {
  return handlerInput.responseBuilder
    .speak(skill.description)
    .reprompt(skill.hint)
    .addConfirmIntentDirective()
    .withShouldEndSession(false)
    .getResponse();
});

module.exports = HelpRequestHandler;
