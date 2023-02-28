import axios from "axios"

import Partner from "./partner"
import ParthnerOffer from "./parthnerOffer"

const instant = axios.create({
  baseURL: process.env.VUE_APP_REST_URL
})

class Api {
  constructor(instant) {
    this.instant = instant
    this.Partner = new Partner(this.instant)
    this.ParthnerOffer = new ParthnerOffer(this.instant)
  }
}

export default new Api(instant)