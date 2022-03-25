console.log("Router Link Map js");
setInterval(() => {
    let a = document.querySelectorAll("a[href$=html],a[href$=php]")
    let aPDF = document.querySelectorAll("a[href$=pdf]")
   
    
    aPDF.forEach(pdfLink => {
        pdfLink.addEventListener("click",(event)=>{
            event.preventDefault();
            let pdfLinker = pdfLink.getAttribute("href");
            let pdfBlanker = pdfLink.getAttribute("data-noblank");
            if (pdfBlanker == null) {
                window.open(pdfLinker,"_blank")
            } else {
                window.open(pdfLinker,"_self")
             
            }
            
        })
        

    });
    a.forEach(element => {
       element.addEventListener("click",(event)=>{
        event.preventDefault();
        let linker = element.getAttribute("href"); 
        let httpRequestSetInter = new XMLHttpRequest();
        httpRequestSetInter.onreadystatechange = ()=>{
              let htmlSetInterval = httpRequestSetInter.response;
              let cont = document.querySelector(".wrapp");
              cont.innerHTML = htmlSetInterval;
             
              
        }
       
        httpRequestSetInter.open("post",linker,true);
        httpRequestSetInter.send();
        

       })
       
    });

}, 200);
