const JogadoresRepo = require('../repositorios/jogadoresRepo');
const Response = require('../models/Response');
const services = require('../services/index');

const jogadoresController = {
   
    getJogadorById(id) {
        return jogadoresRepo.getJogadorById(id);
    },
    getAllJogadores(apiKey){
        if (services.ApiKeyTest(apiKey)){
        let Jogadores = jogadoresRepo.getAllJogadores();
        let resposta = new Response(200,Jogadores,'OK');
        return resposta;
        } else {
            return new Response(403,undefined,'te fode');
        }
    },
    addJogador(Jogador){
        jogadoresRepo.addJogador(Jogador);
    }
}

module.exports = JogadoresController;