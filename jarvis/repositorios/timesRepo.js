const contratos = new Map();
contratos.set("1",["1","3"]);
contratos.set("2",["2"]);


let arrTimes = [];

 arrTimes.push(
  {
    id: "1",
    nome: "Sport Club International",
    federacao: "FGF",
    categoria: [
      "sub-13", "sub-14", "sub-15", "sub-16", "sub-17",
      "sub-13 (fem)", "sub-14 (fem)", "sub-15 (fem)", "sub-16 (fem)", "sub-17 (fem)"
  ]
  }
 );
 
 arrTimes.push(
  {
    id: "2",
    nome: "São José (Zequinha)",
    federacao: "FGF",
    categoria: [
      "sub-13", "sub-14", "sub-15", "sub-16", "sub-17",
      "sub-13 (fem)", "sub-14 (fem)", "sub-15 (fem)", "sub-16 (fem)", "sub-17 (fem)"
  ]
  }
 );

 const timesRepo = {
    getAllTimes: () => {
        return arrTimes;
    },
    getTimeById(id){
        return arrTimes.find((elemento)=>elemento.id == id);
    },
    addTime: (time)=>{
        arrTimes.push(time);
    }
 }

 module.exports = timesRepo;