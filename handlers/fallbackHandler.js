const Handler = require('../helpers/handler');
const skill = require('../data/skill.json');

const FallbackHandler = Handler('AMAZON.FallbackIntent', handlerInput =>
  handlerInput.responseBuilder
    .speak("I'm sorry, I didn't get that.")
    .reprompt(skill.hint)
    .addConfirmIntentDirective()
    .getResponse()
);

module.exports = FallbackHandler;
