// Files
import './css/styles.css'
import getData from './apiCalls'
import Customer from './Customer'
import Room from './Room'
import Booking from './Booking'

// APIs
const customersURL = 'http://localhost:3001/api/v1/customers'
const bookingsURL = 'http://localhost:3001/api/v1/bookings'
const roomsURL = 'http://localhost:3001/api/v1/rooms'

// Images that I didn't know I needed to import
import './images/turing-logo.png'
import './images/usflag.png'
import './images/user.png'
import './images/hand-pointer.png'
import './images/questions-button.png'

// Global Variables
let customers
let rooms
let bookings
let currentCustomer
const currentCustomerID = 10

// Query Selectors


// Event Listeners
window.addEventListener('load', fetchData)


// API Function
function fetchData() {
  const customersData = getData(customersURL)
  const roomsData = getData(roomsURL)
  const bookingsData = getData(bookingsURL)
  Promise.all([customersData, roomsData, bookingsData])
    .then(data => {
      customers = data[0].customers.map((customer) => {
        return new Customer(customer)
      })
      rooms = data[1].rooms.map((room) => {
        return new Room(room)
      })
      bookings = data[2].bookings.map((booking) => {
        return new Booking(booking)
      })
      currentCustomer = customers.find(customer => {
        return customer.id === currentCustomerID
      })
      currentCustomer.filterBookings(bookings)
    })
    .then(() => console.log(currentCustomer))
    .catch(err => console.log("Error: ", err))
}

// Event Handlers


// Other Functions



// `<li class="cards">
//   <div class="card-container">
//     <img src="${}" alt="${}">
//     <div class="card-content">
//       <h3 class="card-title"></h3>
//       <p class="card-subtitle"></p>
//       <p class="card-price"></p>
//     </div>
//   </div>
// </li>`

// `Total Spent: ${}`