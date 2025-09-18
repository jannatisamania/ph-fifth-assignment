/* heart count  */
const allHeart = document.querySelectorAll('.heart-icon') ;

  for( let heart of allHeart){
    heart.addEventListener('click' , function(){
     
     let heartCount = parseInt(document.getElementById('heart-count').innerText) ;
     heartCount++;
     document.getElementById('heart-count').innerText = heartCount ;
    })
  }

