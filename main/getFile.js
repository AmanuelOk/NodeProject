const axios = require('axios');
const rename = require('./rename')
const {readFile, writeFile} = require('fs');
const converter = require('json-2-csv')
const result =()=>{
axios({
    method: 'get',
    url: 'https://gbfs.divvybikes.com/gbfs/en/station_information.json',
  }).then((response) => {
    const pureObj = response.data;
    pureObj.data.stations.forEach((element, i)=> {
    if(element.capacity > 12) {
    if(pureObj.data.stations[i].rental_methods != undefined){
    delete pureObj.data.stations[i].rental_methods;}
    if(pureObj.data.stations[i].rental_uris != undefined){
    delete pureObj.data.stations[i].rental_uris;}}
   rename(pureObj.data.stations[i], 'external_id', 'externalId')
   rename(pureObj.data.stations[i], 'station_id', 'stationId')
   rename(pureObj.data.stations[i], 'legacy_id', 'legacyId')
   }); 
   converter.json2csv(pureObj, (err, csv) => {
    writeFile('./output.txt', csv,'utf8', (err) => {
        if(err){console.log(err); throw err;}
   })
 
});  
  }).catch(err => {console.log(err); return;})
}
module.exports = result;

 