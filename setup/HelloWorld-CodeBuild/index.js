var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {

    var codebuild = new AWS.CodeBuild({region:'us-east-1'});

    var params = {
        projectName: 'HelloWorld',
    };
    codebuild.startBuild(params, function(err, data) {
        if (err) {
            callback(null, 'Error');
        }
        else {
            callback(null, 'Success');
        }
    });
};
