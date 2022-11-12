import chai from 'chai';
import Booking from '../src/Booking';
import Customer from '../src/Customer';
const expect = chai.expect;
import {bookings} from './fixtures/bookings-mock'
import {customers} from './fixtures/customers-mock'

let customer1, customer2, customer3, customer4, customer5, customer6
let bookingsData

describe('Customer class', function() {
  beforeEach(() => {
    customer1 = new Customer(customers[0])
    customer2 = new Customer(customers[1])
    customer3 = new Customer(customers[2])
    customer4 = new Customer(customers[3])
    customer5 = new Customer(customers[4])
    customer6 = new Customer(customers[5])
    bookingsData = bookings.map((booking) => {
      return new Booking(booking)
    })
  })
  it('should have a customer id', function() {
    expect(customer1.id).to.equal(1);
    expect(customer2.id).to.equal(2);
  });

  it('should have a name', function() {
    expect(customer3.name).to.equal("Kelvin Schiller");
    expect(customer4.name).to.equal("Kennedi Emard");
  });

  it('should be able to filter out the bookings made by the user from all existing bookings', function() {
    customer5.filterBookings(bookingsData)
    customer6.filterBookings(bookingsData)
   
    expect(customer5.bookings).to.deep.equal([
      new Booking({
        id: "5fwrgu4i7k55hl6sz",
        userID: 5,
        date: "2022/04/22",
        roomNumber: 15
      }),
      new Booking({
        id: "5fwrgu4i7k55hl6t6",
        userID: 5,
        date: "2022/01/10",
        roomNumber: 12
      })
    ]);
    expect(customer6.bookings).to.deep.equal([
      new Booking({
        id: "5fwrgu4i7k55hl6t8",
        userID: 6,
        date: "2022/02/05",
        roomNumber: 12
      }),
      new Booking({
        id: "5fwrgu4i7k55hl6t9",
        userID: 6,
        date: "2023/12/14",
        roomNumber: 14
      })
    ]);
  });

  it.skip('should be able to create a booking', function() {
    expect(customer5.bookStay()).to.equal();
    expect(customer6.bookStay()).to.equal();
  });

  it.skip('should be able to view past stays', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it.skip('should be able to view upcoming stays', function() {
    expect().to.equal();
    expect().to.equal();
  });

  it.skip('should be able to view all stays', function() {
    expect().to.equal();
    expect().to.equal();
  });
})