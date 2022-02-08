// submitbtn.addEventListener('click', onSubmit);
// submitbtn.addEventListener('mouseover', onSubmit);
// submitbtn.addEventListener('mouseout', onSubmit);

// function store() {
//   // event.preventdefault();

//   var inputName = document.getElementById("name");
//   var inputEmail = document.getElementById("email");
//   localStorage.setItem("name", inputName.value);
//   localStorage.setItem("email", inputEmail.value);
// }



function myfunc() {
  // event.preventdefault();

  var inputName = document.getElementById("name").value;
  var inputEmail = document.getElementById("email").value;
  localStorage.setItem("name", inputName);
  localStorage.setItem("email", inputEmail);
}


function myfunc() {
  // event.preventdefault();

  var inputName = document.getElementById("name").value;
  var inputEmail = document.getElementById("email").value;
  localStorage.setItem("name", inputName);
  localStorage.setItem("email", inputEmail);

  const obj = {
           inputName,
           inputEmail,
          
      }

      localStorage.setItem('userDetails', JSON.stringify(obj));
}