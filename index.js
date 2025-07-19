
  function calculateTip() {
        const bill = parseFloat(document.querySelector('input[name="bill"]').value);
        const tip=parseFloat(document.querySelector('input[name="tip"]').value);
        const people=parseInt(document.querySelector('input[name="people"]').value);

        if(isNaN(bill)|| isNaN(tip)||isNaN(people)|| people<=0){
            document.querySelector('result').innerText='enter the vaild input';
            return;
        }
            const tipTotal = bill * (tip / 100);
    const totalAmount = bill + tipTotal;
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = totalAmount / people;

          document.getElementById('result').innerHTML = `
    <strong>Total Bill (with Tip):</strong> $${totalAmount.toFixed(2)}<br>
    <strong>Tip per Person:</strong> $${tipPerPerson.toFixed(2)}<br>
    <strong>Total per Person:</strong> $${totalPerPerson.toFixed(2)}
  `;

  }


  