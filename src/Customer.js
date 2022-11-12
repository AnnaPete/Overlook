class Customer {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.bookings = []
  }

  filterBookings(bookings) {
    this.bookings = bookings.filter(booking => {
      return booking.userID === this.id
    })
  }

  bookStay() {

  }

  viewPastStays() {

  }

  viewUpcomingStays() {

  }

  viewAllStays() {
    
  }
}

export default Customer