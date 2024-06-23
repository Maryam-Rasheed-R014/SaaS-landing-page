    // mobile manu--------------------
document.addEventListener('DOMContentLoaded',() =>{
    const hambargerButton =document.querySelector('.hambarger-button'); 
    const mobilemenu= document.querySelector('.mobile-menu');
     hambargerButton.addEventListener('click', ()=> 
     mobilemenu.classList.toggle('active') 
     )
    
    }) 
    // faq section-------------------------------

  document.addEventListener('DOMContentLoaded',() =>{
    const faqContainer= document.querySelector('.faq-content');
    faqContainer.addEventListener('click', (e)=>{
       const  groupHeader = e.target.closest('.faq-group-header');
const group=  groupHeader.parentElement;
const groupBody= group.querySelector('.faq-group-body');

const icon = groupHeader.querySelector('i');
// icon change
 icon.classList.toggle('fa-plus'); 
 icon.classList.toggle('fa-minus');
      console.log(groupHeader);
    //   visibility of answer
    groupBody.classList.toggle('open');

    });
  })