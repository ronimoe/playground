const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {

    const encodeAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyC5AsesmnT29elDPqOK6k49ZChERaXWbSE`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Google server not reach!');
      } else if (body.status === 'ZERO_RESULTS'){
        reject('Address not found!')
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longtitude: body.results[0].geometry.location.lng
        });
      };
    });

  });
};

geocodeAddress('5000').then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})