import type { APIGatewayProxyEvent } from "aws-lambda";

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  const game = event.body;
  return {
    statusCode: 200,
    body: game,
  };
};
