console.log("Initiator js");
let array = document.querySelectorAll("a[href$=html],a[href$=php]");
console.log(array);
array.forEach(element => {
    element.addEventListener("click",(event)=>{
        event.preventDefault();
        let httpRequest = new XMLHttpRequest();
        let httpRequestIndex = new XMLHttpRequest();
        let link1 = element.getAttribute("href");
        
         httpRequest.open("post",link1,true)
         httpRequest.onreadystatechange = ()=>{
            let html  = httpRequest.response;
            let htp = document.querySelector(".wrapp");
            htp.innerHTML = html;
        }
        httpRequest.send();
        httpRequestIndex.open("get","Pajax/Initiator.js",true)
        httpRequestIndex.onreadystatechange = ()=>{
           let htmlIndex  = httpRequestIndex.response;
           let htpIndex = document.querySelector(".data-src script");
           htpIndex.innerHTML = htmlIndex;
       }
       httpRequestIndex.send();
        
    })
});