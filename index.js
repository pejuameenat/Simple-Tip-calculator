const resetBtn = document.querySelector('.reset');
const tipBtn = document.querySelector('.tip-btn');
const billValue = document.querySelector('input');
const tipText = document.querySelector('.tip');
const totalText = document.querySelector('.total');

function tipCalculator(bill){
  bill= Number(billValue.value)
  let tip = bill>= 50 &&bill<=300? 20/100 *bill:15/100*bill;
  let totalValue = bill + tip;
  tipText.textContent = `Your tip is: ${Math.floor(tip)}$`;
  totalText.textContent = `Your total pay is: ${Math.ceil(totalValue)}$`;
  return (tipText, totalText);
}

tipBtn.addEventListener('click', tipCalculator)
resetBtn.addEventListener('click', function(){
     window.location.reload()
})

