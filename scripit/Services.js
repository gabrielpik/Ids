import DataArvore from "./Model/model.js"
import View from "./View.js"

export default class Services{

     constructor(document){
        this.link =
        console.log("Services conectado")
        this.dataArvore = []
        this.getDataArvore()
        this.printGET()
        this.view = new View(document)
        
        
        
    }

    async getDataArvore() {


        const fn =  (arrTasks) => {
            this.dataArvore = arrTasks.map(UnitDataArvore => {
                const { id,grossura,altura,comprimento,nfolhas,date,time } = UnitDataArvore
                console.log(new DataArvore(id,grossura,altura,comprimento,nfolhas,date,time))
                return new DataArvore(id,grossura,altura,comprimento,nfolhas,date,time)
            })
/*
            if (typeof sucess === "function") uscess(this.tasks)
            return this.tasks*/
        }

await fetch("https://7c9e-177-191-113-88.ngrok-free.app/arvore", {
    method: "GET",
    headers: {
        'ngrok-skip-browser-warning': 'true',
        "Content-Type": "application/json;charset=UTF-8"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log("Data received:", data);
    return fn(data);
})
.catch(erro => {
    console.error("Fetch error:", erro);
    if (typeof erro === "function") {
        return erro(erro.message);
    }
    throw new Error(erro.message);
});

            this.printGET()
            this.view.renderDadosArvores(this.dataArvore)   
    }

printGET(){
    
    console.log(this.dataArvore)
}

Cadastrar(father){
    let field = father.firstElementChild
    const agora = new Date();
    let Time = agora.toLocaleTimeString('pt-BR');
    let id = field.value

    field = field.nextElementSibling 
    let grossura = parseFloat(field.value)
    
    field = field.nextElementSibling 
    let Altura = field.value

    field = field.nextElementSibling 
    let comprimento = parseFloat(field.value)

    field = field.nextElementSibling 
    let QtdFolha = parseFloat(field.value)

    field = field.nextElementSibling 
    let data = field.value
    Time = data+"-"+Time
    console.log(typeof data)

    console.log(JSON.stringify({
        time:Time,
        id: id,
        grossura:grossura,
        altura: Altura,
        comprimento:comprimento,
        date:data,
        nfolhas: QtdFolha     
    }))


    

    this.link = 'http://localhost:3000/arvore'

    fetch("https://7c9e-177-191-113-88.ngrok-free.app",
        {

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
       

        method:"POST",
        body:JSON.stringify({
            time:Time,
            id: id,
            grossura:grossura,
            altura: Altura,
            comprimento:comprimento,
            date:data,
            nfolhas: QtdFolha     
        })
    })
    .then(function(res){console.log(res)})
    .catch(function (res){console.log(res)})


    console.log(field.value)
    
}

async Delete(id){

   await fetch("https://7c9e-177-191-113-88.ngrok-free.app"+"/"+id,
        {

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
       

        method:"DELETE",
        body:""
    })
    .then(function(res){console.log(res)})
    .catch(function (res){console.log(res)})

    this.getDataArvore()

}

async Path(arrow){
    console.log("Peguei a id"+arrow.id)
    
    arrow = arrow.firstElementChild
    //arrow = arrow.firstElementChild

    let Time =arrow.textContent
    console.log("time:  "+Time)

    arrow = arrow.nextElementSibling
    let id = arrow.textContent
    console.log("id:  "+id)

    arrow = arrow.nextElementSibling
    let grossura = arrow.textContent
    console.log("grossura:  "+grossura)

    arrow = arrow.nextElementSibling
    let altura = arrow.textContent
    console.log("altura:  "+altura)

    arrow = arrow.nextElementSibling
    let comprimento = arrow.textContent
    console.log("comprimento:  "+comprimento)
  
    arrow = arrow.nextElementSibling
    let QtdFolhas = arrow.textContent
    console.log("QtdFolhas:  "+QtdFolhas)

    arrow = arrow.nextElementSibling
    let data = arrow.textContent
    console.log("data:  "+data)

  


    await fetch("https://7c9e-177-191-113-88.ngrok-free.app",
        {

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
       

        method:"PUT",
        body:JSON.stringify({
            time:Time,
            id: id,
            grossura:grossura,
            altura: altura,
            comprimento:comprimento,
            date:data,
            nfolhas: QtdFolhas    
        })
    })
    .then(function(res){console.log(res)})
    .catch(function (res){console.log(res)})

    this.getDataArvore()

}

}