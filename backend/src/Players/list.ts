import type { APIGatewayProxyEvent } from "aws-lambda";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import docClient, { getTableName } from "../docClient";
import { envelop } from "../envelop";

module.exports.handler = async (event: APIGatewayProxyEvent) => {
  const gamesTable = getTableName("players");
  try {
    const params: DocumentClient.QueryInput = {
      TableName: gamesTable,
      IndexName: "winners",
      Limit: 100,
      ScanIndexForward: false,
    };
    const response = await docClient.scan(params).promise();
    const items = response.Items?.reverse();
    if (items) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          items: response.Items,
        }),
      };
    } else return envelop("No players found", 404);
  } catch (error) {
    console.log(error);
    return envelop(`No players found`, 404);
  }
};
