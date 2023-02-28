class Busket {
  constructor(items = {}) {
    this.items = items
    this.loadFromLs()
  }
  clear() {
    this.items = {}
    this.updateView()
  }
  firstAdd(key, { name, count, price }) {
    this.items[key] = {
      name,
      count,
      price,
      key
    }
    this.saveToLs()
  }
  add(key, count = 1) {
    if (!this.items[key]) return
    this.items[key].count += count
    this.saveToLs()
  }
  delete(key, count = 1) {
    if (!this.items[key] || this.items[key].count == 0) return
    this.items[key].count -= count
  }
  get(key) {
    if (!this.items[key]) return
    return this.items[key]
  }
  getAllSum() {
    return Number(Object.values(this.items).reduce((acc, val) => {
      return acc += val.price * val.count
    }, 0))
  }
  getAllCount() {
    return Object.values(this.items).reduce((acc, val) => {
      return acc += val.count
    }, 0)
  }
  toString({ city, street }) {
    const br = `%0a‎`
    let text = `Заказ из приложения Байрам: Товары ${br}`
    text += Object.values(this.items).reduce((acc, val) => (
      acc += `${val.name} - ${val.price * val.count} Р за ${val.count} шт.`
    ), "")
    text += br
    if (city && street) {
      text += `Доставка по адресу: Г. ${city} Ул. ${street} ${br}`
      text += `Стоимость доставки: ${getDelyveryPrice()} Р ${br}`
      text += `Комментарий: ${document.querySelector('.comment').value} ${br}`
    }
    let price = this.getAllSum() + getDelyveryPrice()
    text += "Итого: " + price + " Р"
    return text
  }
  saveToLs() {
    localStorage.setItem('busket', JSON.stringify(this.items))
  }
  loadFromLs() {
    // const json = localStorage.getItem('busket')
    // if (!json) return
    // this.items = JSON.parse(json)
  }
}
export default Busket;