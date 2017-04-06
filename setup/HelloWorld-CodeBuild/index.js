var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {

    var codebuild = new AWS.CodeBuild({region:'us-east-1'});

    var params = {
        projectName: 'HelloWorld',
    };
    codebuild.startBuild(params, function(error, data) {
        if (error) {
            callback(error);
        }
        else {
            callback(null, 'Success');
        }
    });
};
