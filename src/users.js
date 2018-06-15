import React from 'react';
import fetch from 'isomorphic-fetch';

function Data() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
}
export default Data;