const labels = document.querySelectorAll('.mail labele');

labels.forEach(lable =>{
    lable.innerHTML = lable.innerText
    .split('')
    .map((letter,idx) =>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
});
