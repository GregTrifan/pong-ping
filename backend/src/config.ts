if (!process.env.AWS_REGION) {
  process.env.AWS_REGION = "us-east-1";
}

if (!process.env.DYNAMODB_NAMESPACE) {
  process.env.DYNAMODB_NAMESPACE = "dev";
}

const AWS = require("aws-sdk");

let DocumentClient = null;

if (process.env.IS_OFFLINE) {
  AWS.config.update({
    region: "localhost",
    endpoint: "http://localhost:8000",
  });
}
DocumentClient = new AWS.DynamoDB.DocumentClient();

function envelop(res: any, statusCode = 200) {
  let body;
  if (statusCode == 200) body = JSON.stringify(res, null, 2);
  else body = JSON.stringify({ errors: { body: [res] } }, null, 2);
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body,
  };
}

module.exports = {
  envelop,
  DocumentClient,
};
