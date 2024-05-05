  function toggleVisible(list){
    for (const element of list) {
      document.getElementById('dot-' + element).classList.toggle("visible") 
    }
  }
  
  function dice(side){
    let num = Math.ceil(Math.random()*side);
    const elements = Array.from(document.getElementsByClassName("visible"))
        for (const element of elements) {
            element.classList.remove("visible")
        }

  /*Unit Test*/
  function unitTest(side){
    if(elements.length >= side) {
      console.log('false')
    }
  }
    document.getElementById('number').innerText = num

    if(num==1){
      toggleVisible([5])
      
    } else if(num==2) {
      toggleVisible([1, 9])

    }else if(num==3) {
      toggleVisible([1, 5, 9])

    }else if(num==4) {
      toggleVisible([1, 3, 7, 9])

    }else if(num==5) {
      toggleVisible([1, 3, 5, 7, 9])

    }else if(num==6) {
      toggleVisible([1, 3, 4, 6, 7, 9])

    }else if(num==7) {
      toggleVisible([1, 3, 4, 5, 6, 7, 9])
      
    } else if(num==8) {
      toggleVisible([1, 2, 3, 4, 6, 7, 8, 9])

    } else {
      toggleVisible([1, 2, 3, 4, 5, 6, 7, 8, 9])

    }
  }


