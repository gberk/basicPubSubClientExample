// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub({keyFilename: 'service-account.json'}); //Replace with your key file name

const topicName = 'brightness'; //Replace with your PubSub topic
const data = JSON.stringify({ level: 100 }); 

const dataBuffer = Buffer.from(data);

pubsub
  .topic(topicName)
  .publisher()
  .publish(dataBuffer)
  .then(messageId => {
    console.log(`Message ${messageId} published.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });