function amt(amount, tax) {
  if (amount > 10 || tax > 999) {
    console.log('Taxable');
  } else {
    console.log('Non-taxable');
  }
}

amt(10, 1000);

const amount = 9;

if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);
