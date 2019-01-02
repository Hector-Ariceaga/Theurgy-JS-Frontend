class Treatment {
  constructor(treatmentJSON) {
    this.id = treatmentJSON.id
    this.name = treatmentJSON.name
    this.details = treatmentJSON.details
  }

  renderNameLi() {
    return `<li>${this.name}</li>`
  }
}