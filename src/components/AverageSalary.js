import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';
let apiName = 'api21bdef25';
let path = '/api/';
const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
};

function processLocation(location) {
    if(location.match('Remote')) {
        return false;
    }

    location = location.toLowerCase().replace(' ', '-');
    location = location.split(',')[0];

    if(encodeURIComponent(location).match(/|%|\(/)) {
        return false
    }

    return location
}
export default function AverageSalary({location}) {

    const [salary, setSalary] = useState([]);

    useEffect(() => {
        const locationVar = processLocation(location);

        if (!locationVar) setSalary("N/A")

        API.get(apiName, path + 'string/' + locationVar + '/salaries', myInit)
        .then(({data})=> {
            if(data !== "N/A") {
                data = data.toFixed(2)
            }
            setSalary(data)
        }).catch(console.log)
    }, [location])
    return salary ? (
        <span>{salary}</span>
    ) : ( <span>N/A</span>)
}
