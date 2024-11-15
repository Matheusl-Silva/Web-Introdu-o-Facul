let i = 1;

function salvar(){
    let nome = document.querySelector("#name").value;
    nome = nome + '' + document.getElementById("lastname").value;
    let email = document.getElementById("mail").value;

    let tbody = document.querySelector(".table tbody");

    let linha = document.createElement("tr");

    let colId = document.createElement("td");
    let colName = document.createElement("td");
    let colEmail = document.createElement("td");

    colId.textContent = i;
    colName.textContent = nome;
    colEmail.textContent = email;  
    
    linha.appendChild(colId);
    linha.appendChild(colName);
    linha.appendChild(colEmail);

    tbody.appendChild(linha);
    i++;
}