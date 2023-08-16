function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationNote = document.forms["register"]["note"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Codigo deve ser prenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O Titulo deve ser prenchido");
    return false;
  }
  if (validationDirector == "") {
    alert("O diretor/diretora deve ser prenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser prenchido");
    return false;
  }
  if (validationActor == "") {
    alert("O Ator/Atriz deve ser prenchido");
    return false;
  }
  if (validationNote == "") {
    alert("A nota IMDb deve ser prenchido");
    return false;
  }
  if (validationRadio == "") {
    alert("O Genero deve ser prenchido");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}
