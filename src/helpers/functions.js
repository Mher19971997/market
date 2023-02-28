const updateBusketTwo = () => {
  setTimeout(checkDelyveryPrice, 100)
  if (!document.querySelector(".res")) return
  let deliveryPrice = getDelyveryPrice()
  if (deliveryPrice === undefined) return
  document.querySelector(".res").innerHTML = vue.busket.getAllSum() + " P"
  if (!deliveryPrice) {
    document.querySelector(".res3").innerHTML = "-"
  }
  document.querySelector(".res3").innerHTML = deliveryPrice + " P"
  document.querySelector(".res2").innerHTML = vue.busket.getAllSum() + deliveryPrice + " P"

}
const checkDelyveryPrice = (selectEl) => {
  selectEl = selectEl || document.querySelector("select")
  if (!selectEl) { return }
  const data = selectEl?.selectedOptions[0]?.dataset || {}
  const fromPrice = data.fromPrice
  const price = vue.busket.getAllSum()
  const mesEl = selectEl?.parentElement.querySelector('.form-error')
  if (price < fromPrice) {
    mesEl.innerHTML = `Доставка в данный населенный пункт от: ${fromPrice} рублей`
    mesEl.style.display = 'block'
    return false
  } else {  
    mesEl.style.display = 'none'
    return true
  }
}
const getDelyveryPrice = () => {
  const data = document.querySelector("select")?.selectedOptions[0]?.dataset || {}
  let deliveryPrice = data.price
  const freePrice = data.freePrice
  const price = vue.busket.getAllSum()
  if (freePrice && price >= freePrice) {
    deliveryPrice = 0
  }
  return Number(deliveryPrice) || 0
}
export { updateBusketTwo };

