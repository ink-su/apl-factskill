const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = require('./handlers/launchRequestHandler');
const HelpRequestHandler = require('./handlers/helpRequestHandler');
const EventHandler = require('./handlers/eventHandler');
const CancelIntentHandler = require('./handlers/cancelIntentHandler');
const FallbackHandler = require('./handlers/fallbackHandler');
const ShapeRequestHandler = require('./handlers/getShapeHandler');

const SessionEndedRequestHandler = {
  canHandle: (handlerInput) => handlerInput.requestEnvelope.request.type === 'SessionEndedRequest',
  handle: (handlerInput) => handlerInput.responseBuilder.speak("I hoped you've learned from your visit.").getResponse()
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpRequestHandler,
    EventHandler,
    CancelIntentHandler,
    FallbackHandler,
    ShapeRequestHandler,
    SessionEndedRequestHandler
  )
  .lambda();
