const rename = function(_obj, older , newer){
// check of obj is an instance of an object and has the required property
if(_obj[older]===null && typeof _obj !== object)return;
const renamed = _obj[older];
delete _obj[older];
_obj[newer] = renamed;
}
module.exports = rename;
