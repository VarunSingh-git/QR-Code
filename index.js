const input = document.getElementById("input")

document.getElementById('input').addEventListener('change',()=>{

  const bankInfo = input.value
  
var qr = new QRious({
    element: document.getElementById('qr-code'),
    value: bankInfo,  // You can add any text here
    size: 200,
    level: 'H' 
  });
  
})