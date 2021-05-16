import React, { Component } from "react"

class App extends Component {

  state = {
    data: null
  }


  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({data: res.express}))
    .catch(err => console.log(err))
  }

  callBackendAPI = async() => {
    const response = await fetch('/books')
    const data = await response.json()
    if (data) {
      const {
        title: bookTitle,
      } = data[0]
    } else {
    if (response.status !== 200) {
      throw Error(data.message) 
    }
  }
    return data;
  }

  render(){
  return (
      <div className="App">
      
    
      </div>
    );
  }
}

export default App;
