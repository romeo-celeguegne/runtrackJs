window.addEventListener("load", ()=> {
    let btn = document.getElementById("button")
    let para = document.getElementById("para")

   
    function showhide(){
        if (para.style.display ==='none'){
            para.style.display = 'block'
        }else {
            para.style.display = 'none'
        }
    }
        
        btn.addEventListener('click', showhide)
    







})

