module.exports = (intent, handle)  => ({
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === intent;
    },
    handle: handle
});
