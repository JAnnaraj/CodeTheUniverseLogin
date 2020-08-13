import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_cdiFjNPKT',
  ClientId: '12a7oqav4kdl3itsohm0oi46rn'
};

export default new CognitoUserPool(poolData);