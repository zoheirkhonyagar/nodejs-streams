export default class Payment {
  constructor (paymentSubject) {
    this.paymentSubject = paymentSubject
  }

  creditCard ({ id, userName, age }) {
    console.log(`\n A payment occurred from ${userName}`)
    this.paymentSubject.notify({ id, userName })
  }
}
