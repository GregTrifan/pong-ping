import type { APIGatewayProxyEvent } from "aws-lambda";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import docClient, { getTableName } from "../docClient";
import { envelop } from "../envelop";

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  const gamesTable = getTableName("games");
  let gameID = event.pathParameters?.page;
  try {
    const params: DocumentClient.QueryInput = {
      TableName: gamesTable,
      Limit: 100,
      ScanIndexForward: false,
    };
    const game = await docClient
      .get({
        TableName: gamesTable,
        Key: {
          id: gameID,
        },
      })
      .promise();
    if (Object.keys(game).length !== 0) {
      params.ExclusiveStartKey = { id: gameID };
    }
    const response = await docClient.scan(params).promise();
    const items = response.Items;
    if (items) {
      let lastItem: number = items[items.length - 1].id;
      return {
        statusCode: 200,
        body: JSON.stringify({
          lastItem: lastItem,
          items: response.Items,
        }),
      };
    } else return envelop("No games found", 404);
  } catch (error) {
    return envelop(`No games found`, 404);
  }
};
