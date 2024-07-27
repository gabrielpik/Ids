import DataArvore from "./Model/model.js"

export default class View{

    constructor(documentHTML){
        this.document = documentHTML
        this.areaList = this.document.querySelector(".areaList")
        this.areaPrincipal = this.document.querySelector(".main")

        this.areaPrincipal.style.display="grid";
        this.renderArea = this.renderArea.bind(this);
        this.colunm = this.document.querySelector("#name-Colunm")
        this.arow = this.document.querySelector("#arow")
        this.document.querySelector("#all").addEventListener("click",this.renderAreaListRE)
        this.document.addEventListener("click",this.renderAreaInitialRE)

        this.renderNameColunm()
        
       
    }

    renderAreaListRE(){

        if(this.areaPrincipal.style.display == "grid"){
            this.areaPrincipal.style.display="none";
            this.areaList.style.display="flex";
            //style.display = "none";
            
        }
       
           
    }

    renderAreaInitialRE(){
        if(this.areaList.style.display == "flex"){

            this.areaPrincipal.style.display="grid";
            this.areaList.style.display="none";
            console.log( this.areaPrincipal.style.display)

        }
    }

    renderNameColunm()
    {

        console.log("entei na fun")
        let taskObjs = Object.keys(new DataArvore(0,0,0,0,0,0))
        this.colunm.innerHTML = ""
        this.arow.innerHTML =""

        taskObjs.forEach(taskObj => {
            let one =this.document.createElement("th")
            console.log(taskObj)
            one.textContent=taskObj

            this.colunm.appendChild(one)
        });

    }

    renderDadosArvores(ObjDataTree){
        console.log("entrei")
        this.arow.innerHTML =""
        console.log("--------------------------")

        console.log(ObjDataTree)

        console.log("--------------------------")
        ObjDataTree.forEach(tree => {
            let one =this.document.createElement("tr")
            one.id="idtree"+tree.id
            one.addEventListener("click", function(e){

                let btns =  e.target;

                //procura a id areList
                while(btns  &&  btns.className != "areaList" )
                {
                    btns = btns.parentElement
                }
                if(btns)
                    console.log("id encotrada"+btns.className )

                btns = btns.lastElementChild
                console.log("id encotrada"+btns.Time )
                
               

                console.log("em cima")
                let elemento = e.target

                //elemento.style.backgroundColor="rgb(66,100 , 7)"
                
                elemento = elemento.parentElement
                elemento.id="arow-"+tree.Time
                console.log(elemento.id)
                elemento = elemento.firstElementChild
                let irmao = elemento
                let arows = elemento.parentElement
                arows = arows.parentElement
                arows = arows.firstElementChild
                while(arows){
                    let uarow = arows.firstElementChild
                    while(uarow){
                        uarow.style.backgroundColor="rgb(209, 238, 157)"
                        uarow=uarow.nextElementSibling
                    }
                    
                    arows =arows.nextElementSibling
                }

                while(irmao){
                    irmao.style.backgroundColor="rgb(66,100 , 7)"
                    irmao = irmao.nextElementSibling
                }
                console.log("---------------------------  :   ")
                btns =btns.firstElementChild
                while(btns){
                    btns.id= "tree-id-"+tree.Time
                    console.log("id dos btns   :   "+btns.id)
                    btns = btns.nextElementSibling
                }
                    
      
            })

            this.arow.appendChild(one)

            let edit =this.document.createElement("btn")
            edit.style.textContent = "editar"
            edit.style.height= "100%";
            edit.style.width= "100%";
            edit.style.display="none"
            
            let child = this.arow.lastElementChild
            

            let cell =this.document.createElement("td")
            cell.textContent= tree.Time
       
            child.appendChild(cell)

            cell =this.document.createElement("td")
            cell.textContent= tree.id
            cell.contentEditable = true;
            
            
            child.appendChild(cell)
            child.lastElementChild.appendChild(edit )
            //cell.appendChild(edit)

            cell =this.document.createElement("td")
            cell.textContent= tree.grossura
            cell.contentEditable = true;
            child.appendChild(cell)

            cell =this.document.createElement("td")
            cell.textContent= tree.altura
            cell.contentEditable = true;
            child.appendChild(cell)

            cell =this.document.createElement("td")
            cell.textContent= tree.comprimento
            cell.contentEditable = true;
            child.appendChild(cell)

            cell =this.document.createElement("td")
            cell.textContent= tree.QtdFolhas
            cell.contentEditable = true;
            child.appendChild(cell)

            cell =this.document.createElement("td")
            cell.textContent= tree.data
            cell.contentEditable = true;
            child.appendChild(cell)

            cell =this.document.createElement("div")
            cell.id= ""
            cell.textContent="editar"
            cell.style.display="none"
            
            child.appendChild(cell)


            child.lastElementChild.appendChild(edit)


      
            console.log("--------------------------")
            
           
           
            console.log(" teste "+tree.id)
            //one.textContent=taskObj

           
        });

        

        //<td>Maria</td>
    }



}