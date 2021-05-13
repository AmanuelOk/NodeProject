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
    const arr = new Array();
    pureObj.data.stations.filter((el) => el.capacity > 12).forEach((element, i)=> {
    if(pureObj.data.stations[i].rental_methods != undefined){
    delete pureObj.data.stations[i].rental_methods;}
    if(pureObj.data.stations[i].rental_uris != undefined){
    delete pureObj.data.stations[i].rental_uris;}
   rename(pureObj.data.stations[i], 'external_id', 'externalId')
   rename(pureObj.data.stations[i], 'station_id', 'stationId')
   rename(pureObj.data.stations[i], 'legacy_id', 'legacyId')
   dataArray = Object.keys(pureObj.data.stations[i]).map((k) => {return pureObj.data.stations[i][k]});
   arr.push(dataArray.join(','));
   arr.push('<break>')
}); 
arr.unshift('/n')
arr.unshift(Object.keys(pureObj.data.stations[0]).join(','));

writeFile('./output_.txt',arr, 'utf8', (err) => {
    if(err){console.log(err); throw err;}
})
}).catch(err => {console.log(err); return;})
}
module.exports = result;
