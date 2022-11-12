class Room {
  constructor(data) {
    this.number = data.roomNum
    this.roomType = data.roomType
    this.bidet = data.hasBidet
    this.bedSize = data.bedSize
    this.numBeds = data.numBeds
    this.costPerNight = data.cost
  }
}

export default Room