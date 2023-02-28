export default class {
  constructor(instant) {
    this.instant = instant
    this.prefix = "/categories"
  }

  getAll() {
    return this.instant.get(`${this.prefix}/`).then(r => r.data)
  }
}