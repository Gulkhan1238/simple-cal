



function Sum(){
    var num1= document.getElementById('num-1').value ;
    var num2 = document.getElementById('num-2').value ;
    var total = parseInt(num1)+parseInt(num2);
    document.getElementById('result').value =   total;
    alert(total);


}
function Sub(){
   
    var num1= document.getElementById('num-1').value ;
    var num2 = document.getElementById('num-2').value ;
    var total = parseInt(num1)-parseInt(num2);
    document.getElementById('result').value =   total;
    alert(total); 

}
function Multiply(){
    var num1= document.getElementById('num-1').value ;
    var num2 = document.getElementById('num-2').value ;
    var total = parseInt(num1)*parseInt(num2);
    document.getElementById('result').value =   total;
    alert(total);

}
function Divide(){
    var num1= document.getElementById('num-1').value ;
    var num2 = document.getElementById('num-2').value ;
    var total = parseInt(num1)/parseInt(num2);
    document.getElementById('result').value =   total;
    alert(total);
}
