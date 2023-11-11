const btn=document.querySelector('.btn');
const ul=document.querySelector('ul')

btn.addEventListener('click',()=>{
    ul.classList.toggle('active')
    btn.classList.toggle('transform')
})