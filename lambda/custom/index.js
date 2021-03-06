/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const skillName = 'HTTPステータス検索';
const promptText = '三桁のHTTPステータスコードを言ってください。';
const httpStatusCodes = require('./httpStatusCodes');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    console.log("LaunchRequestHandler called");
    const speechText = `${skillName}です。`;

    return handlerInput.responseBuilder
      .speak(speechText + promptText)
      .reprompt(promptText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};

const StatusCodeIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'StatusCodeIntent';
  },
  handle(handlerInput) {
    console.log("StatusCodeIntentHandler called");
    const statusCodeSlot = handlerInput.requestEnvelope.request.intent.slots.statusCode;
    if (statusCodeSlot && statusCodeSlot.value) {
      const codeValue = statusCodeSlot.value;
      console.log(`codeValue=${codeValue}`);

      if (codeValue in httpStatusCodes) {

        let speechText = `ステータスコード${codeValue}ですね。ステータスコード${codeValue}は、${httpStatusCodes[codeValue].speechName}、です。`;
        if (httpStatusCodes[codeValue].speechDesc !== undefined) {
          speechText += httpStatusCodes[codeValue].speechDesc;
        } else {
          speechText += httpStatusCodes[codeValue].Desc;
        }

        let cardText = `ステータスコード${codeValue}ですね。ステータスコード${codeValue}は、${httpStatusCodes[codeValue].Name}、です。${httpStatusCodes[codeValue].Desc}`;

        return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard(skillName, cardText)
          .getResponse();
      } else {
        const speechText = `ステータスコード${codeValue}は登録されていません。`;

        return handlerInput.responseBuilder
          .speak(speechText + promptText)
          .reprompt(promptText)
          .withSimpleCard(skillName, speechText)
          .getResponse();
      }
    } else {
      throw new Error("unknown slot value.");
    }
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'このスキルでは、三桁のHTTPステータスコードを言うと、ステータスコードの意味を教えてくれます。例えば、「ステータスコード200を教えて」「404の意味を調べて」と言ってください。また、単に「302」とステータスコードを言うだけでも構いません。';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(promptText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'ご利用ありがとうございました。';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    const sorryText = 'すいません、ただしく聞き取れませんでした。もう一度言っていただけますか？';
    return handlerInput.responseBuilder
      .speak(sorryText)
      .reprompt(sorryText)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    StatusCodeIntent,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
