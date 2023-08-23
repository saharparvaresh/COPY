const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");



copyBtn.addEventListener('click', () => { 
  textarea.select()
  let textValue = textarea.value;
  


  navigator.clipboard.writeText(textValue)
  copyBtn.innerText = 'کپی شد'
  setTimeout(() => { 
    copyBtn.innerText = 'کپی کن'
    copyBtn.style.backgroundColor='#03A9F4'
  },1500)
})