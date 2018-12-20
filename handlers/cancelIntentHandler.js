module.exports = {
  canHandle: (handlerInput)  =>
    handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
      handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'),
  handle: (handlerInput) => handlerInput.responseBuilder.getResponse()
};
