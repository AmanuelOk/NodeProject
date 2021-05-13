const s3client= require('./aws_s3client');
const fs = require('fs');
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'amanuelokubanodeproject',
        Key: 'pgnefile', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3client.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
module.exports = uploadFile;

