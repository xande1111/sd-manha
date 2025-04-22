let arrJogadores = [];

 arrJogadores.push(
  {
    id: "1",
    nome: "Antony",
    posicao: "Atacante",
  
  }
 );
 
 arrJogadores.push(
  {
    id: "2",
    nome: "braithwaite",
    posicao: "Atacante"
  }
 );

 const JogadoresRepo = {
    getAllJogadores: () => {
        return arrJogadores;
    },
    getJogadorById(id){
        return arrJogadores.find((elemento)=>elemento.id == id);
    },
    addJogador: (Jogador)=>{
        arrJogadores.push(Jogador);
    }
 }

 module.exports = JogadoresRepo;