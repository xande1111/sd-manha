const Response = require('../models/Response');
const services = {
    ApiKeyTest(key){
        return (key == 'ironman');
    },
    createOkResponse(payload){
        return new Response(200, payload, 'OK');
    },
    createUnAithResponse(){
        return new Response(403, undefined, 'Não Autorizado');
    },
    createCreatedResponse(){

    },
};

module.exports(services);