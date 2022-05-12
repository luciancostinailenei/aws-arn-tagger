# aws-arn-tagger

A node utility function that helps tagging AWS resources based on their ARN and overcomes limitations of AWS CLI tag-resources API

# Usage example

Prior, make sure you have the function available in the file were you're trying to execute it.

```
const arns = [
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
  // no size restriction
];

const tags = [
  "owner=your-team@workemail.com",
  "environment=qa",
  "app=invoicing",
];

const AWSConfig = {
  profile: "AWSProfileName",
  region: "eu-west-1",
};

tagger(arns, tags, AWSConfig);
```
