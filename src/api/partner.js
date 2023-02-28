export default class {
  constructor(instant) {
    this.instant = instant
    this.prefix = "/partners"
  }

  getOne(id) {
    return this.instant.get(`${this.prefix}/${id}`).then(r => r.data)
  }
  
}