Applcation Description
This application exposes a GET api endpoint, when request is successful, a json payload will be 
retrieved from 'https://gbfs.divvybikes.com/gbfs/en/station_information.json', that will be processed
futher, and saved in to an output.txt file in a csv format
How to run this application
- Set up aws credentials for accessing AWS S3
  -
  - Install aws-cli 
  - run 'aws configure --profile <profile>' 
  - you will be prompted to enter 
           -'AWS Access Key ID' 
           -'AWS Secret Access Key' 
- To clone this repository  run 'git clone ""
- Frow with-in the cloned repository run 'npm install' to download node dependencies
- To run the application run ' npm start'
- Using the browser or post man make a get request to ' http://localhost:3000/upload'
- The out put file, is located in the same directory './output.txt'


