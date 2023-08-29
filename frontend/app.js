// app.js
const express = require('express');
const app = express();

// Configure AWS with your credentials
AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'eu-west-1'
});

// Create an S3 instance
const s3 = new AWS.S3();

app.get('/', async (req, res) => {
    try {
        // Use the S3 SDK to list objects in a bucket
        const bucketName = 'your-bucket-name';
        const params = {
            Bucket: bucketName
        };

        const data = await s3.listObjectsV2(params).promise();

        // Construct a simple HTML response
        let htmlResponse = '<h1>Objects in S3 Bucket</h1><ul>';
        data.Contents.forEach(item => {
            htmlResponse += `<li>${item.Key}</li>`;
        });
        htmlResponse += '</ul>';

        res.send(htmlResponse);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
