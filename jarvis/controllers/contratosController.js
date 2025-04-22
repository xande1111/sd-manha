const contratosRepo = require('../repositorios/contratosRepo');
const Response = require('../models/Response');
const services = require('../services/index');

const contratosController = {
    
    getTimeById(id) {
        return contratosRepo.getTimeById(id);
    },
    getAllcontratos(apiKey){
        if (services.ApiKeyTest(apiKey)){
        let contratos = contratosRepo.getAllcontratos();
        //let resposta = new Response(200,contratos,'OK');
        return services.createOkResponse(time);
        } else {
            return services.createUnAuthResponse();
        }
    },
    addTime(time){
        contratosRepo.addTime(time);
    }
}

module.exports = contratosController;