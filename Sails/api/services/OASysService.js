import request from 'request-promise';

let auth_token = null;

/**
 * 
 * Authenticate with OASys
 */
export async function authenticateOASys() {
    let user = {
        email: 'x@x.com',
        password: '12'
    };
    let request_params = {
        uri: 'http://192.168.1.33:1337/auth',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: user,
        json: true
    };
    return request(request_params).then((auth_response) => {
        if (!auth_response || (auth_response && !auth_response.token)) {
            throw 'Invalid Token';
        }
        auth_token = auth_response.token;
        return auth_response;
    }, (error) => {
        auth_token = null;
        throw error;
    });
}

/**
 * 
 * Fetch leads from OASys
 */
export async function fetchOASysLeads() {
    if (!auth_token) {
        throw 'Invalid Token';
    }

    let request_params = {
        uri: 'http://192.168.1.33:1337/getLeads',
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': auth_token
        },
        json: true
    };

    return request(request_params).then((leads) => {
        auth_token = null;
        return leads.leadsInfo;
    }, (error) => {
        auth_token = null;
        throw error;
    });
}