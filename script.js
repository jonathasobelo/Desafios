


function adicionar() {

    let lista = document.getElementById("campo").value;
    let listaTarefas = document.getElementById("tarefas").innerHTML;

    listaTarefas +="<input id='checar' type ='checkbox'>"+ "<button id='deletar'>Del</button>"+"<li>"+lista+ "</li>";



    document.getElementById("tarefas").innerHTML = listaTarefas;

    document.getElementById("campo").value = "";
}




document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        const btn = document.querySelector("#btn2");
        btn.click();
    }

});

