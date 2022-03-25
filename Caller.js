(function() {
console.log("Caller js");
(function() {
    let nav = document.querySelector("#nav");
    let httpNav = new XMLHttpRequest();
    httpNav.open("get","Pajax/Router.js",true);
    httpNav.onreadystatechange = ()=>{
        let NavResponse = httpNav.response;
        nav.innerHTML = NavResponse;
    }
    httpNav.send();
}())
   


    function pajax(container,Linkarray) {

    Linkarray.forEach(Link => {
        let httpRequest = new XMLHttpRequest();
        

    Link.addEventListener("click",(event)=>{
         event.preventDefault();
         let link1 = Link.getAttribute("href");
        
         httpRequest.open("post",link1,true)
         httpRequest.onreadystatechange = ()=>{
            let html  = httpRequest.response;
            container.innerHTML = html;
            let state = httpRequest.readyState;
           
            if (state == 4) {
                let httpRequestLoader = new XMLHttpRequest();
                httpRequestLoader.open("post","Pajax/Initiator.js",true)   
                httpRequestLoader.onreadystatechange = ()=>{
                let script  = httpRequestLoader.response;
                let scripContainer = document.querySelector(".data-src script");
                scripContainer.innerHTML = script;
            }
    
            httpRequestLoader.send();
            }
             
        
           
        }
        
        httpRequest.send();
        
        
    
        

    })
    });
   
    
    
}

let container2 = document.querySelector(".wrapp")
let tab = document.querySelectorAll("a[href$=html],a[href$=php]");
pajax(container2,tab);
















  /*  
let likn2 = document.querySelector(".link2");
let link1 = document.querySelector(".link1");



let arrayLink = document.querySelectorAll("a");
arrayLink.forEach(element => {
    element.getAttribute("href");
    console.log();
});
console.log(arrayLink);







let container2 = document.querySelector(".container")
pajax(container2,likn2);
pajax(container2,link1)
*/
}())