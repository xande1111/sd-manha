const timesRepo = require('../repositorios/timesRepo');
const Response = require('../models/Response');
const services = require('../services/index');

const timesController = {
    getTimeById(id) {
        return timesRepo.getTimeById(id);
    },
    getAllTimes(apiKey){
        if (services.ApiKeyTest(apiKey)){
        let times = timesRepo.getAllTimes();
        //let resposta = new Response(200,times,'OK');
        return services.createOkResponde(time);
        } else {
            return services.createUnAuthResponse(403,undefined,'Não autorizado');
        }
    },
    addTime(time){
        timesRepo.addTime(time);
    }
}

module.exports = timesController;