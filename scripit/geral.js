/*var form_one = document.querySelector("#classform")*/
/*var form = document.querySelector("#form")

*/
import Services from './Services.js'

import View from './View.js'

const btnDelete = document.querySelector("#btn_del_List ")
const btnPath = document.querySelector("#btn_path_List")
const allarow = document.querySelector("#arow")
const btnGet = document.querySelector("#botao-atualizar")

btnPath.addEventListener("click",ePath)
btnDelete.addEventListener("click",eDelete)
btnGet.addEventListener("click",eget)




const service = new Services(document)
document.getElementById('Combobox').addEventListener('change', setSelecion);
/*
const view = new View(document)


while(!teste.dataArvore)
view.renderDadosArvores(teste.dataArvore)
view.renderDadosArvores(teste.dataArvore)


*/

document.querySelector(".fist").style.backgroundImage= 'url("20220907_131042.jpg")'
function backGround(cor){

    
let dirF = 'url("https://th.bing.com/th/id/OIP.qaZeGnvSc7LMnmBg9UpfkwHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain")'

let dirA ='url("20220907_131042.jpg")'

    let back = document.querySelector(".fist")

    if(cor=='Frutas' && back.style.backgroundImage!= dirF){
        console.log(back.style)
        console.log('-----------------------------------------')
       console.log(back.style.backgroundImage)
        back.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.qaZeGnvSc7LMnmBg9UpfkwHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain")'
        back.style.backgroundRepeat ='no-repeat'
        back.style.backgroundSize= 'cover'
        back.style.backgroundPosition= 'center center'

    }else if(cor=="Arvores" && back.style.backgroundImage != dirA){
        console.log(back.style)
        console.log('-----------------------------------------')
       console.log(back.style.backgroundImage)
        back.style.backgroundImage = 'url("20220907_131042.jpg")'
        back.style.backgroundRepeat ='no-repeat'
        back.style.backgroundSize= 'cover'
        back.style.backgroundPosition= 'center center'
    }

 

}



function setSelecion(e){
    
    var form = document.querySelector("#forms")
    if(form){
    
    /*form.remove()*/

    form.parentElement.removeChild(form)
    }
    const form_one = document.querySelector(".classform")
 

  
    form_one.insertAdjacentHTML("beforeend", "<form id='forms'></form>");
    console.log(document.querySelector("#forms"))

    if(document.querySelector("#Combobox").value=="Arvores"){
       
    const teste = document.createElement("input")

    teste.setAttribute("type","text")

    teste.setAttribute("placeholder","Id")
    document.querySelector("#forms").appendChild(teste)
     form = document.querySelector("#forms")
    /*teste.prepend(teste)*/
    const filho = teste.firstElementChild

    form.lastElementChild.insertAdjacentHTML("afterend","<input type='text' placeholder='Grossura'>") 

    form.lastElementChild.insertAdjacentHTML("afterend"," <input type='text' placeholder='Altura'>")
   
    form.lastElementChild.insertAdjacentHTML("afterend","<input type='text' placeholder='Comprimento'>") 

    form.lastElementChild.insertAdjacentHTML("afterend",'<input type="text" placeholder="Qtd Folhas">')
    
    form.lastElementChild.insertAdjacentHTML("afterend",'<input type="date" placeholder="data">')

    form.lastElementChild.insertAdjacentHTML("afterend",' <input type="submit"  value="Enviar >">')
               
    backGround('Arvores')
    
    }else if(document.querySelector("#Combobox").value=="Frutas"){

        form = document.querySelector("#forms")
        form.insertAdjacentHTML("afterbegin"," <input type='text' placeholder='Id'>")

        form.insertAdjacentHTML("beforeend","<input type='text' placeholder='Diametro'>") 
        form.insertAdjacentHTML("beforeend","<input type='text' placeholder='Volume'>") 
        form.insertAdjacentHTML("beforeend",'<input type="date" placeholder="data">') 
        form.insertAdjacentHTML("beforeend",'<input type="submit" value="Enviar >">') 
        backGround('Frutas')
    }
    var btn = form.lastElementChild
        btn.addEventListener("click",enviar)

        //teste.Cadastrar(document.querySelector("#forms"))
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];



// Quando o usuário clicar no X, fecha o modal
span.onclick = function() {
    modal.style.display = "none";

    //document.querySelector("#cmd").remove
    document.querySelector("#cmd").parentElement.removeChild(document.querySelector("#cmd"))
}

// Quando o usuário clicar fora do modal, fecha o modal
/*  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
function enviar(e){
    e.preventDefault()
    service.Cadastrar(document.querySelector("#forms"))
    
    var cont =document.querySelector(".modal-content")

    modal.style.display = "block";
    // = document.querySelectorAll("#form input")
    
    const btn = document.getElementById(enviar)
    //console.log(form[1].value)

    var inputs = document.querySelector("#forms").firstElementChild

    //modal.style.display = "none"

    cont.insertAdjacentHTML("beforeend","<div id='cmd'></div>")

    var cmd =document.querySelector("#cmd")//cont.lastElementChild
    //inputs.value

   // console.log(cont.childNodes)
    

   cmd.insertAdjacentHTML("beforeend",`<p>${inputs.value}</p>`)
   
    //inputs=
     
    inputs=inputs.nextElementSibling    
    cmd.insertAdjacentHTML("beforeend",`<p>${inputs.value}</p>`)


   
    //cmd =modal.lastElementChild

/*
    inputs.forEach(input => {
        cont.insertAdjacentHTML("beforeend", `<p>${input.value}</p>`);
    });*/
    //cont.insertAdjacentHTML("beforeend","<p>GAbriel</p>")
   
    



    
}

function eDelete(e){

    if(btnDelete.id=="btn_del_List")
    {
        console.log("selecione uma id")
        return
    }
    console.log("id selecionada"+btnDelete.id)
    console.log(btnDelete.id.replace("tree-id-", ""))
    service.Delete(btnDelete.id.replace("tree-id-", ""))
}

function ePath(e){
    if(btnPath.id=="btn_path_List")
    {
        console.log("selecione uma id")
        return
    }

   
    console.log("id selecionada : "+btnPath.id.replace("tree-id-", ""))

    let id = "arow-"+btnPath.id.replace("tree-id-", "")
    
    let elementId = allarow.firstElementChild



    while(elementId && elementId.id != id){
        console.log("wile"+elementId.id)
        elementId = elementId.nextElementSibling
    }
        

    service.Path(elementId)
}

function eget(e){

    service.getDataArvore()
    
}





