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
      treatments.forEach(treatment => this.treatments.push(treatment))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const treatmentContainer = document.getElementById('treatment-container')
    treatmentContainer.innerHTML = 'my treatments here'
  }
}