var product=document.querySelector(".startdish ")
var search=document.getElementById("searchbar")
var productlist=product.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("h3").textContent
    
    if(productname.toUpperCase().indexOf(entervalue)<0)
    
  {
    productlist[count].style.display="none"
  }
  else{
    productlist[count].style.display="block"
  }
}
  
    })