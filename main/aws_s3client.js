const AWS = require('aws-sdk')

AWS.config.update({region: 'us-west-1'});
const s3client = new AWS.S3({apiVersion: '2006-03-01'});
module.exports = s3client;
/*
const bucketParams = {
    Bucket : process.argv[2]
  };
  // call S3 to create the bucket
  s3Client.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Location);
    }
  }); **/