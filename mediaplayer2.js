//aval btn haro mizarim bad to java tarifshun mikonim 
//bad tag audio ro html mizanim ta musicmon ro dakhelesh bezarim
//khastim begim boro ahang badi ya qabli niza nadarim ye createelement audio benevisim faqat kafie src tag audio eo avaz mikonim 
//func hai ke to onclick goftim ro inja tarif mikonim 
//kol src haro dakhele array zakhire mikonim va ba indwx bahashun kar mikonim 

let audioElem = document.querySelector('audio')
let priviousElem = document.querySelector('previousMusicHandler')
let playElem = document.querySelector('playHandler')
let pauseElem = document.querySelector('pauseHandler')
let nextElem = document.querySelector('nextMusicHandler')
//et speedElem = document.querySelector('musicSpeedHandler')

let musicsSrc=[
    'html.m4a',
    'bazar.m4a',
    'kar.m4a'
]
 let audioIndex = 0 


function previousMusicHandler(){
    audioIndex --
    
     if(audioIndex < 0){
       audioIndex = 2             
     }  
      audioElem.setAttribute('src',musicsSrc[audioIndex])      
      console.log(musicsSrc[audioIndex])
      playHandler() 
}

function playHandler(){
    audioElem.play()
    console.log('played :)');

   // setInterval(function(){
   //   console.log(audioElem.currentTime);
   //  },1000)
}

function pauseHandler(){
    audioElem.pause()
    console.log('paused :)');
}

function nextMusicHandler(){
    audioIndex ++
 // aval if ro paiin neveshtim khata mohasebati midad 
    //chon bad az 2 bar next zadan undifined mide in shart ro minevisim (chon index 0 bod  bere jelo mishe 3 vali ma index 3 nadarim )
    // agar ahanga tamom shod barmigarde be ahang aval mesle charkhe 
  if(audioIndex > musicsSrc.length - 1){
    audioIndex = 0             
  }  

   // let newAudioIndex = audioIndex + 1   // pas in ro nmikhaim    
  
 
   audioElem.setAttribute('src',musicsSrc[audioIndex])      //miad src music k ba dokme badi entekhab kardim ro mirizze to chizi ke alan baiad pakhsh beshe
   console.log(musicsSrc[audioIndex])
   playHandler() // baraie inke ta zadim bere badi play beshe va nakhaim khodemon playesh konim
  
}
