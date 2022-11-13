import Booking from "./Booking"

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

  viewPastStays() {
    const pastStays = this.bookings.filter((booking) => {
      return Date.parse(new Date(booking.date)) <= Date.now()
    })
    if (!pastStays.length) {
      return "Oops! It looks like you've never stayed with us in the past. Well, there's no time like the present!"
    } 
    return pastStays
  }

  viewUpcomingStays() {
    const upcomingStays = this.bookings.filter((booking) => {
      return new Date(booking.date) > Date.now()
    })
    if (!upcomingStays.length) {
      return "Oops! You have no upcoming stays. Feel free to book one now!"
    } 
    return upcomingStays
  }
}

export default Customer