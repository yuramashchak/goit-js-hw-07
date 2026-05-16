const writeYourName = document.querySelector('#name-input')
const yourName = document.querySelector('#name-output')

writeYourName.addEventListener('input', onNewName)
function onNewName(e){
    const inputText = writeYourName.value.trim();
    if(inputText === ""){
        yourName.textContent = 'Anonymous';
    } else{
        yourName.textContent = `${inputText}`
    }
   
}
