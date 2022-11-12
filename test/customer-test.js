import chai from 'chai';
const expect = chai.expect;

let booking1 = {
id: "5fwrgu4i7k55hl6sz",
userID: 9,
date: "2022/04/22",
roomNumber: 15
}
let booking2 = {
id: "5fwrgu4i7k55hl6t5",
userID: 43,
date: "2022/01/24",
roomNumber: 24
}
let booking3 = {
id: "5fwrgu4i7k55hl6t6",
userID: 13,
date: "2022/01/10",
roomNumber: 12
}
let booking4 = {
id: "5fwrgu4i7k55hl6t7",
userID: 20,
date: "2022/02/16",
roomNumber: 7
}
let booking5 = {
id: "5fwrgu4i7k55hl6t8",
userID: 1,
date: "2022/02/05",
roomNumber: 12
}
let booking6 = {
id: "5fwrgu4i7k55hl6t9",
userID: 38,
date: "2023/12/14",
roomNumber: 14
}

let customer1 = {
id: 1,
name: "Leatha Ullrich"
}
let customer2 = {
id: 2,
name: "Rocio Schuster"
}
let customer3 = {
id: 3,
name: "Kelvin Schiller"
}
let customer4 = {
id: 4,
name: "Kennedi Emard"
}
let customer5 = {
id: 5,
name: "Rhiannon Little"
}
let customer6 = {
id: 6,
name: "Fleta Schuppe"
}

describe('Customer class', function() {
  it('should have a customer id', function() {
    expect(customer1.id).to.equal(1);
    expect(customer2.id).to.equal(2);
  });

  it('should have a name', function() {
    expect(customer3.name).to.equal("Kelvin Schiller");
    expect(customer4.name).to.equal("Kennedi Emard");
  });

  it('should be able to create a booking', function() {
    expect(customer5.bookStay()).to.equal();
    expect(customer6.bookStay()).to.equal();
  });

  it('should be able to view past stays', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it('should be able to view upcoming stays', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it('should be able to view all stays', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it('', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it('', function() {
    expect().to.equal();
    expect().to.equal();
  });
})