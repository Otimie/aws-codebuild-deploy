var AWS = require('aws-sdk');

exports.handler = function(event, context) {

	var region = "us-east-1"
	var s3Key = event.Records[0].s3.object.key;
	var s3Bucket = event.Records[0].s3.bucket.name;
	var functionName = "HelloWorld";

	var lambda = new AWS.Lambda({
		'region': region
	});

	var parameters = {
		FunctionName: functionName,
		S3Key: s3Key,
		S3Bucket: s3Bucket
	};

	lambda.updateFunctionCode(parameters, function(error, data) {
		if (error) {
			context.fail(error);
		}
		else {
			context.succeed(data);
		}
	});
};

