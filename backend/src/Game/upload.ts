import type { APIGatewayProxyEvent } from "aws-lambda";
import type { Game } from "../types/game";
import docClient, { getTableName, getUser } from "../docClient";
import { generateId } from "../idGen";
const gamesTable = getTableName("games");
const playersTable = getTableName("players");

const increaseWins = (name: string) => {
  docClient
    .update({
      TableName: playersTable,
      Key: {
        name: name,
      },
      UpdateExpression: "ADD wins :wins",
      ExpressionAttributeValues: {
        ":wins": 1,
      },
      ReturnValues: "NONE",
    })
    .promise();
};
const createPlayer = (name: string) => {
  docClient
    .put({
      TableName: playersTable,
      Item: {
        name: name,
        wins: 0,
      },
    })
    .promise();
};
module.exports.handler = async (event: APIGatewayProxyEvent) => {
  // We've got a game schema set up so it's unlikely to get null
  const game: Game = JSON.parse(event.body ?? "");
  const { score1, score2, player1, player2 } = game;
  const newID = generateId();
  await docClient
    .put({
      TableName: gamesTable,
      Item: {
        id: newID,
        score1: score1,
        score2: score2,
        player1: player1,
        player2: player2,
      },
    })
    .promise();
  let usr1 = await getUser(player1);
  let usr2 = await getUser(player2);
  if (Object.keys(usr1).length === 0) {
    createPlayer(player1);
  }
  if (Object.keys(usr2).length === 0) {
    createPlayer(player2);
  }
  if (score1 > score2) increaseWins(player1);
  else increaseWins(player2);
  return {
    statusCode: 200,
    body: JSON.stringify(game),
  };
};
