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

describe('Booking class', function() {
  it('should have an id', function() {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz");
    expect(booking2.id).to.equal("5fwrgu4i7k55hl6t5");
  });

  it('should have a user id', function() {
    expect(booking3.userID).to.equal(13);
    expect(booking4.userID).to.equal(20);
  });

  it('should have a date', function() {
    expect(booking4.date).to.equal("2022/02/16");
    expect(booking5.date).to.equal("2022/02/05");
    expect(booking6.date).to.equal("2023/12/14");
  });

  it('should have a room number', function() {
    expect(booking1.roomNumber).to.equal(15);
    expect(booking3.roomNumber).to.equal(12);
  });
})
