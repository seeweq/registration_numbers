

function addingbton() {
  var createLi = document.createElement('li');
  var text =document.getElementById('inputBox').value;
  var text1=document.createTextNode(text);

  if(inputBox.value.length > 0 && inputBox !==" "){
  createLi.appendChild(text1);
  document.getElementById('numberPlates').appendChild(createLi);
  localStorage.setItem('regstores', text);
  document.getElementById('inputBox').value = "";
  };
}
function filterbutton(){
var selection = document.querySelector('#optionsbton');
var selectedloc = selection.options[selection.selectedIndex].value;
console.log(selectedloc)

var ul = document.getElementById('numberPlates')
var blocklist = ul.querySelectorAll('li');
console.log(blocklist);
for(var i=0; i< blocklist.length ;i++){
  var regPlate = blocklist[i].innerHTML;
  console.log(regPlate);
  var outReg = regPlate.toUpperCase();
  if(selectedloc === "All"){
    blocklist[i].style.display= 'block';
  }
  else if (selectedloc ===outReg && outReg.startsWith('CA')) {
    blocklist[i].style.display ='block';
  }
  else if (selectedloc ===outReg && outReg.startsWith('CY')) {
    blocklist[i].style.display ='block'
  }
  else if (selectedloc ===outReg && outReg.startsWith('CJ')) {
    blocklist[i].style.display ='block'
  }
    else if (selectedloc ===outReg && outReg.startsWith('CL')) {
    blocklist[i].style.display ='block'
  }
  else if (selectedloc!== outReg) {
     blocklist[i].style.display = 'none';
  }
}
};
