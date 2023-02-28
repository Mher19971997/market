export default class {
  constructor(instant) {
    this.instant = instant
    this.prefix = "/partners"
  }

  getAll({categories, city}) {
    let query = ''

    if (categories) query += 'categories=' + categories.join(',') + '&'
    if (city) query += 'city=' + city + '&'
    
    return this.instant.get(`${this.prefix}?${query}`).then(r => r.data)
  }

  getOne(id) {
    return this.instant.get(`${this.prefix}/${id}`).then(r => r.data)
  }
  
}