var $input = document.querySelector(".screen");

 function insert(symbol) {
    
     $input.value = $input.value + symbol;
    }

 function clearInput() {$input.value = ''}
 
 function back() {
     $input.value = $input.value.substring(0, $input.value.length - 1);
 }

 function equal() {
     $input.value = eval($input.value)
 } 

