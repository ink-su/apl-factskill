const Handler = require('../helpers/handler');
const skill = require('../data/skill.json')
const HelpRequestHandler = Handler('AMAZON.HelpIntent', handlerInput => {
  return handlerInput.responseBuilder
    .speak(skill.description + skill.hint + ' You can also exit by saying stop. ' + '. What would you like to do?')
    .reprompt(skill.hint)
    .withShouldEndSession(false)
    .getResponse();
});

module.exports = HelpRequestHandler;
