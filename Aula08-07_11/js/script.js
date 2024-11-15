function escreveConsole() {
  console.log("Hello World");
}

function exibeDados() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  document.getElementById("result").innerHTML =
    "Nome digitado: " + nome + "<br>" + "Senha digitada: " + senha;
  alert("Matheus é viado: " + nome);
}

function verRadio() {
  var exibe = document.getElementsByName("f");
  if (elementos[0].checked) {
    document.getElementById("radios").innerHTML =
      "Voce escolheu sim" + elementos[0].value;
  } else if (elementos[1].checked) {
    document.getElementById("radios").innerHTML =
      "Voce escolheu não" + elementos[1].value;
  } else if (elementos[2].checked) {
    document.getElementById("radios").innerHTML =
      "Voce escolheu as vezes" + elementos[2].value;
  }
}

function verRadio2() {
  var elementos2 = document.getElementsByName("f");
  for (var i = 0; i < elementos2.length; i++) {
    if (elementos2[i].checked) {
      document.getElementById("radios").innerHTML =
        "Voce escolheu " + elementos2[i].value;
    }
  }
}

function verSelect() {

    var seletor = document.querySelector("#curso");
    document.querySelector(".output").textContent = "curso: " + seletor.value;
}