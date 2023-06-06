const axios = require('axios');

const CLIENT_ID = '74c86b8dca1a0be6e2fd8a6bef01e37b';
const CLIENT_SECRET = 'sRMn&6L^!j^*i#*g8n#ryqRB9Yv#8dKK';
const API_AUTH_URL = "https://enrollment-api-auth.paymentshub.com"; // The Sandbox Authentication URL
const API_SANDBOX_URL = "https://enrollment-api-sandbox.paymentshub.com"; // The Sandbox Enrollment API URL


class authHelper{
    
    constructor(){

    }

    /*
    * Get Auth Token
    */
    static async getAuthToken(){

        try{
            return await axios.post(API_AUTH_URL + '/oauth/token', {
                grant_type: "client_credentials",
                scope: "all",
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            });
            
        } 
        catch (error) {
            console.error("Error");
            throw error;
        }
    }



}

exports.authHelper = authHelper;
