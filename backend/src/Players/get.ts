import type { APIGatewayProxyEvent } from "aws-lambda";
import { getUser } from "../docClient";
import { envelop } from "../envelop";

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  let playerName = event.pathParameters?.player;
  if (playerName) {
    const user = await getUser(playerName);
    if (Object.keys(user).length === 0)
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    return envelop(`Player not found`, 404);
  }
  return envelop(`Player not found`, 404);
};
