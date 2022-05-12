# aws-arn-tagger

A Node.js utility function that helps tagging AWS resources based on their ARN and overcomes limitations of AWS CLI tag-resources API

References:
[]()
[]()

# Usage example

Download the repo on your local, then edit the arn-aws-tagger.js file by extending it with the function call in a similar manner as below:

```
const arns = [
  //Replace these with your AWS resources ARNs
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  "arn:partition:service:region:account-id:resource-type:resource-id",
  "arn:partition:service:region:account-id:resource-id",
  "arn:partition:service:region:account-id:resource-type/resource-id",
  //no size restriction
];

const tags = [
  //Replace these the desired tags to be attached
  "owner=your-team@workemail.com",
  "environment=qa",
  "app=invoicing",
];

const AWSConfig = { //adjust these based on your config
  profile: "AWSProfileName",
  region: "eu-west-1",
};

tagger(arns, tags, AWSConfig);
```

Later, use `node arn-aws-tagger.js` to execute the script.
