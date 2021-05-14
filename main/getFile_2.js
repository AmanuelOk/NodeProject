const axios = require('axios');
const rename = require('./rename')
const {readFile, writeFile} = require('fs');
const result =()=>{
axios({
    method: 'get',
    url: 'https://gbfs.divvybikes.com/gbfs/en/station_information.json',
  }).then((response) => {
    const pureObj = response.data;
    let dataArray =[];
    let filteredData =[];
    const arr = new Array();
    filteredData = pureObj.data.stations.filter((el) => el.capacity > 12);
    filteredData.forEach((element, i)=> {
    if(filteredData[i].rental_methods != undefined){
    delete filteredData[i].rental_methods;}
    if(filteredData[i].rental_uris != undefined){
    delete filteredData[i].rental_uris;}
   rename(filteredData[i], 'external_id', 'externalId')
   rename(filteredData[i], 'station_id', 'stationId')
   rename(filteredData[i], 'legacy_id', 'legacyId')
   dataArray = Object.keys(filteredData[i]).map((k) => {return filteredData[i][k]});
   arr.push(dataArray.join(','));
   arr.push('\n');
}); 
arr.unshift('\n')
arr.unshift(Object.keys(filteredData[0]).join(','));

writeFile('./output_.txt',arr, 'utf8', (err) => {
    if(err){console.log(err); throw err;}
})
}).catch(err => {console.log(err); return;})
}
module.exports = result;
