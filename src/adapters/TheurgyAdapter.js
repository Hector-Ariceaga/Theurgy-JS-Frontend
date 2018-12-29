class TheurgyAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/'
  }

  getTreatments() {
    return fetch(this.baseUrl + 'treatments').then(res => res.json())
  }
}