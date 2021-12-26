document.addEventListener("DOMContentLoaded",function(){
(function(){
  // variable
  let count = parseInt(localStorage.getItem("count")) || 0
  // document
  const popimg = document.querySelector(".click-img")
  const infoCount = document.querySelector(".count span")


  updateInfo(infoCount,count)
  // logic event
  document.addEventListener("keydown",function(e){
    e.preventDefault()
    count++
    toggleImg(popimg)
    updateInfo(infoCount,count)
    cekNotif(count)
    localStorage.setItem("count",count)
  })
  document.addEventListener("keyup",function(){
    toggleImg(popimg)
  })
  document.addEventListener("pointerdown",function(e){
    e.preventDefault()
    count++
    toggleImg(popimg)
    updateInfo(infoCount,count)
    cekNotif(count)
    localStorage.setItem("count",count)
  })
  document.addEventListener("pointerup",function(){
    toggleImg(popimg)
  })
  
// handle close click
  document.addEventListener("click",function(e){
    if(e.target.className === "close"){
      e.target.parentNode.classList.remove("active")
      setTimeout(()=>{
        document.body.removeChild(e.target.parentNode)      
      },400)
    }
  })
  // function
  function cekNotif(count){
    switch(count){
      case 100:
          notif("kamu hebat")
          break
      case 500:
          notif("teruskan anak muda")
          break
      case 1000:
          notif("pasti gabut :V")
          break
      case 1500:
          notif("mantap lanjut bang :V")
          break
      case 5000:
          notif("buset gabosen apa :V")
          break
      case 10000:
          notif("udah pasti chiter :V")
          break
    }
  }
  function updateInfo(infoCount,count){
    infoCount.textContent = count
  }
  function toggleImg(popimg){
    popimg.classList.toggle("p")
    popimg.classList.toggle("op")
  }

  function notif(pesan){
    const notif = document.createElement("div")
    notif.classList.add("notif")
    const close = document.createElement("div")
    close.classList.add("close")
    const notifTitle = document.createElement("div")
    notifTitle.classList.add("notif-title")
    notifTitle.innerHTML = pesan
    notif.appendChild(close)
    notif.appendChild(notifTitle)
    document.body.appendChild(notif)
    setTimeout(()=>{
      notif.classList.add("active")
    },100)
    setTimeout(()=>{
      notif.classList.remove("active")
      setTimeout(()=>{
        document.body.removeChild(notif)      
      },400)
    },10000)
  }
})()
})
