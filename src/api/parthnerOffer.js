export default class {
  constructor(instant) {
    this.instant = instant
    this.prefix = "/partneroffers"
  }
  
  getAll(filterData = {}) {
    const filterString = Object.keys(filterData).reduce((acc, key) => (
      acc += key + "=" + filterData[key] + "&"
    ), '')
    return this.instant.get(`${this.prefix}/?${filterString}`).then(r => r.data)
  }

  getOne(id) {
    return this.instant.get(`${this.prefix}/${id}`).then(r => r.data)
  }
}