class Treatments {
  constructor() {
    this.treatments = []
    this.adapter = new TheurgyAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadTreatments()
  }

  fetchAndLoadTreatments() {
    this.adapter
    .getTreatments()
    .then(treatments => {
      treatments.forEach(treatment => this.treatments.push(new Treatment(treatment)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const treatmentsContainer = document.getElementById('treatments-container')
    const treatmentsString = this.treatments.map(treatment => `<li>${treatment.name}</li>`).join('')
    treatmentsContainer.innerHTML = treatmentsString
  }
}