const convertToCelsius = (fTemp)=>{
  const cTemp = (fTemp - 32)/(9/5);
  cTempPretty = Math.round(cTemp*10)/10;
  return cTempPretty;
};

const convertToFahrenheit = (cTemp)=>{
  const fTemp = (cTemp*1.8)+32;
  fTempPretty = Math.round(fTemp*10)/10;
  return fTempPretty;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
