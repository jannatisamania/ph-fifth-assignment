// function


function getInnerText (id){
    const element = document.getElementById(id) ;
    const elementValue = element.innerText ;
    const elementValueNumber = parseInt(elementValue) ;
    return elementValueNumber ;
}

// heart count  
const allHeart = document.querySelectorAll('.heart-icon') ;
  for( let heart of allHeart){
    heart.addEventListener('click' , function(){
     
     let heartCount = getInnerText('heart-count') ;
     heartCount++;
     document.getElementById('heart-count').innerText = heartCount ;
    })
  }

  /***  call button */

   let allCallButton = document.querySelectorAll('.call-btn') ;
for( let callButton of allCallButton){
    callButton.addEventListener('click', function(){
 const card = callButton.closest('.card') ;

  let allCoin = getInnerText('coin-amount') ;  
   if( allCoin < 20){
  alert('❌ not enough coin to make this call');
  return ;
 }

 const serviceName = card.querySelector('.service-name').innerText ;
 const serviceNumber = card.querySelector('.service-number').innerText ; 

        alert(`📞calling ${serviceName}  ${serviceNumber}`) ;
    
 allCoin -= 20 ;
 document.getElementById('coin-amount').innerText = allCoin ;

 const time = new Date().toLocaleTimeString() ;
 const callHistory = document.getElementById('dial-list') ;
  const div = document.createElement('div') ;
  div.className ="bg-[#FAFAFA] flex justify-between p-4 rounded-xl  mt-8" ;
  div.innerHTML = `
       <div>
      <p class="text-xl font-medium"> ${serviceName}</p>
      <p class="text-gray-600">${serviceNumber}</p>
  </div>
  <p> ${time}</p>
  
  `
  callHistory.appendChild(div)

})
}

document.getElementById('clear-button').addEventListener('click' , function(){
  document.getElementById('dial-list').innerHTML = '' ;
})

const allCopyButton = document.querySelectorAll('.copy-btn') ;
for(const copyButton of allCopyButton){
  copyButton.addEventListener('click', function(){
 alert('service number is copied')

 let copyCount = getInnerText('copy-count') ;
copyCount ++ ;

document.getElementById('copy-count').innerText = copyCount ;

const copyCard = copyButton.closest('.card')

const serviceCopy = copyCard.querySelector('.service-number').innerText.trim() ;
 navigator.clipboard.writeText(serviceCopy)
 


  } )

  
}