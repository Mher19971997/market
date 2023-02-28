import Partner from "./partner"
import PartnerOffer from "./partnerOffer"
import City from "./city"
import Category from "./category"


class Api {
  constructor(instant) {
    this.instant = instant
    this.Partner = new Partner(this.instant)
    this.PartnerOffer = new PartnerOffer(this.instant)
    this.City = new City(this.instant)
    this.Category = new Category(this.instant)
  }
}

export default (instant) => new Api(instant)