   function evaluar(){
    var aNum = parseInt(document.getElementById("aNum").value);
    var bNum = parseInt(document.getElementById("bNum").value);
    var negative = document.getElementById("negative").value;
    var salida = document.getElementById("salida");
    var isNegative = false;
       if (negative == 1)
           isNegative == true;
       
    if (aNum < 0 && bNum > 0 && !isNegative || aNum > 0 && bNum < 0 && !isNegative){
        salida.innerHTML = "1";
    }else{
        if(aNum < 0 && bNum < 0 && isNegative){
            salida.innerHTML = "1";
        }else{
            salida.innerHTML = "0";
        }
            
    }   
   
}