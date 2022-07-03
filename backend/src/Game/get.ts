import type { APIGatewayProxyEvent } from "aws-lambda";
import docClient, { getTableName } from "../docClient";
import { envelop } from "../envelop";

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  const gamesTable = getTableName("games");
  let gameID = event.pathParameters?.session;
  if (!gameID) return envelop(`Game not found`, 404);
  const game = await docClient
    .get({
      TableName: gamesTable,
      Key: {
        id: gameID,
      },
    })
    .promise();
  if (Object.keys(game).length !== 0)
    return {
      statusCode: 200,
      body: JSON.stringify(game),
    };
  return envelop(`Game not found`, 404);
};
