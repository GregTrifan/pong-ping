import type { APIGatewayProxyEvent } from "aws-lambda";
import type { Game } from "../types/game";
import docClient, { getTableName, getUser } from "../docClient";
import { generateId } from "../idGen";
const gamesTable = getTableName("games");
const playersTable = getTableName("players");

const increaseLosses = (name: string) => {
  docClient
    .update({
      TableName: playersTable,
      Key: {
        name: name,
      },
      UpdateExpression: "ADD losses :losses",
      ExpressionAttributeValues: {
        ":losses": 1,
      },
      ReturnValues: "NONE",
    })
    .promise();
};
const increaseWins = (name: string, name_2: string) => {
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
  increaseLosses(name_2);
};

const createPlayer = (name: string) => {
  docClient
    .put({
      TableName: playersTable,
      Item: {
        name: name,
        wins: 0,
        losses: 0,
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
  if (score1 > score2) increaseWins(player1, player2);
  else if (score1 < score2) increaseWins(player2, player1);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Game uploaded successfully!", id: newID }),
  };
};
