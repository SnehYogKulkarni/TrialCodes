function calculate() { 
    var length = document.getElementById("lengthBox").value; 
    var width = document.getElementById("widthBox").value; 
    var area = calculateArea(length, width); 
    document.getElementById("areaBox").value = area; 
  } 

  function calculateArea(length, width) { 
    var area = length * width; 
    return area; 
  }