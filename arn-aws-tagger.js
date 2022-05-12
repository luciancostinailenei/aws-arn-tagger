const { spawn } = require("child_process");

/**
 * An AWS resources utility function that helps using AWS CLI tag-resources API in an easy manner to tag resources based on AWS ARN.
 * @param {Array<string>} arns - an array containing strings representing ARNs.
 * @param {Array<string>} tags - an array containing strings representing tags under the form of 'tag=value'; bad formats will cause command errors.
 * @param {} awsConfig
 */
function tagger(arns, tags, awsConfig) {
  const { region, profile } = awsConfig;

  if (!region) {
    throw Error(
      'You need to specify "region" property inside the third argument which is the AWS config object'
    );
  }

  if (!profile) {
    throw Error(
      'You need to specify "profile" property inside the third argument which is the AWS config object'
    );
  }

  const MAX_ARN_LIST_SIZE = 20; //AWS CLI tag-resources API accepts a maximum of 20 ARNs per invoke
  for (let i = 0; i < arns.length; i += MAX_ARN_LIST_SIZE) {
    const chunkOfArns = arns.slice(i, i + MAX_ARN_LIST_SIZE);

    let arnsStringPreparedForCommandBuild = "";
    chunkOfArns.forEach((arn) => {
      arnsStringPreparedForCommandBuild += `${arn} `;
    });

    let tagsStringPreparedForCommandBuild = "";
    tags.forEach((tag, index) => {
      if (index !== tags.length - 1) {
        tagsStringPreparedForCommandBuild += `${tag},`;
      } else {
        tagsStringPreparedForCommandBuild += `${tag}`;
      }
    });

    const process = spawn(
      "aws resourcegroupstaggingapi tag-resources",
      [
        `--resource-arn-list ${arnsStringPreparedForCommandBuild}`,
        `--tags ${tagsStringPreparedForCommandBuild}`,
        `--region ${awsConfig["region"]}`,
        `--profile ${awsConfig["profile"]}`,
      ],
      { shell: true }
    );

    process.stdout.on("data", (data) => {
      console.log(`stdout: \n${data}`);
    });

    process.stderr.on("data", (data) => {
      console.log(`stderr: \n${data}`);
    });

    process.on("error", (data) => {
      console.error(`stderr: ${data}`);
    });
  }
}