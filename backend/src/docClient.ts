import { DynamoDB } from "aws-sdk";
if (!process.env.AWS_REGION) {
  process.env.AWS_REGION = "us-east-1";
}

if (!process.env.DYNAMODB_NAMESPACE) {
  process.env.DYNAMODB_NAMESPACE = "dev";
}
const docClient = new DynamoDB.DocumentClient({
  region: "local",
  endpoint: "http://localhost:8000",
  accessKeyId: "sdas",
  secretAccessKey: "Sasdasdad",
});

export default docClient;
export const getTableName = (aName: string) => {
  return `realworld-${process.env.DYNAMODB_NAMESPACE}-${aName}`;
};
export const getUser = async (name: string) => {
  const playersTable = getTableName("players");
  return await docClient
    .get({
      TableName: playersTable,
      Key: {
        name: name,
      },
    })
    .promise();
};
