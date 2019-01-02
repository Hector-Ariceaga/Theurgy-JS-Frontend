class Treatments {
  constructor() {
    this.treatments = []
    this.adapter = new TheurgyAdapter()
    this.initBindingAndEventListeners()
    this.fetchAndLoadTreatments()
  }

  initBindingAndEventListeners() {
    this.treatmentsContainer = document.getElementById('treatments-container')
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
    this.treatmentsContainer.innerHTML = this.treatments.map(treatment => treatment.renderNameLi()).join('')
  }
}