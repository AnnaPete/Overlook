import chai from 'chai';
const expect = chai.expect;

let room1 = {
number: 1,
roomType: "residential suite",
bidet: true,
bedSize: "queen",
numBeds: 1,
costPerNight: 358.4
}

let room2 = {
number: 2,
roomType: "suite",
bidet: false,
bedSize: "full",
numBeds: 2,
costPerNight: 477.38
}

let room3 = {
number: 3,
roomType: "single room",
bidet: false,
bedSize: "king",
numBeds: 1,
costPerNight: 491.14
}

let room4 = {
number: 4,
roomType: "single room",
bidet: false,
bedSize: "queen",
numBeds: 1,
costPerNight: 429.44
}

let room5 = {
number: 5,
roomType: "single room",
bidet: true,
bedSize: "queen",
numBeds: 2,
costPerNight: 340.17
}

let room6 = {
number: 6,
roomType: "junior suite",
bidet: true,
bedSize: "queen",
numBeds: 1,
costPerNight: 397.02
}

describe('Check to see if the room has a room number', function() {
  it('should have a room number', function() {
    expect(room1.number).to.equal(1);
    expect(room2.number).to.equal(2);
  });
});

describe('Check to see what type of room it is', function() {
  it('should have a room type', function() {
    expect(room1.roomType).to.equal("residential suite");
    expect(room2.roomType).to.equal("suite");
  });
});

describe('See if the room has a bidet', function() {
  it('should have a bidet', function() {
    expect(room1.bidet).to.equal(true);
    expect(room5.bidet).to.equal(true);
  });
});

describe('See if the room does not have a bidet', function() {
  it('should not have a bidet', function() {
    expect(room3.bidet).to.equal(false);
    expect(room4.bidet).to.equal(false);
  });
});

describe('Check to see what size bed is in the room', function() {
  it('should specify what size of bed the room has', function() {
    expect(room2.bedSize).to.equal("full");
    expect(room3.bedSize).to.equal("king");
    expect(room6.bedSize).to.equal("queen");
  });
});

describe('Check to see how many beds are in the room', function() {
  it('should return the number of beds that are in the room', function() {
    expect(room3.numBeds).to.equal(1);
    expect(room5.numBeds).to.equal(2);
    expect(room6.numBeds).to.equal(1);
  });
});

describe('Check to see how much a room costs per night', function() {
  it('should show the cost per night in dollars', function() {
    expect(room1.costPerNight).to.equal(358.4);
    expect(room2.costPerNight).to.equal(477.38);
    expect(room3.costPerNight).to.equal(491.14);
  });
});