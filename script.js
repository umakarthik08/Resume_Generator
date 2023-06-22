function add_proj()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("proj_id");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder","Explain your project in brief");


    let buttonobj = document.getElementById("proj");
    let weob = document.getElementById("pro");
    weob.insertBefore(newNode,buttonobj);
    

}

function remove_proj()
{
    const list = document.getElementById("proj");
    if (list.hasChildNodes()) {
    list.removeChild(list.children[0]);
    }
}

function add_acheivements()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("proj_id");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder","Add your acheivements");
    
    let buttonobj = document.getElementById("addachebutton");
    let weob = document.getElementById("ache");
    weob.insertBefore(newNode,buttonobj);
}

function remove_acheivements()
{
    const list = document.getElementById("textache");
    if (list.hasChildNodes()) {
    list.removeChild(list.children[0]);
    }
}