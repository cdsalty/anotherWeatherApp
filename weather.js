class Weather {
  constructor(city, state){
    this.apiKey = '';   // in .gitignore for now
    this.city = ciity;
    this.state = state;
  }

  // Fetch weather from darksky api
  async getWeather() {
    const response = await fetch('updatewebsitelinkwithapikey,city and state.json');

    const responseData = await response.json();
    // response data and inside of response data is current_observation which is what we need
    return responseData.current_observation; 
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}