//
import React, { Component } from 'react';
//
import Header from './components/header/header'
//
import Main from './main'
//
import api from './service/api'

class App extends Component {
  constructor(props){
		super(props);

		this.state = {
			courses: [],
		}
	}

	async componentDidMount() {
		const response = await api.get();

		this.setState({ courses: response.data });
	}
  render() {
    const { courses } = this.state;
    return (
      <div>
        <Header />
        <Main coursesDados={courses}/>
      </div>
    );
  }
}

export default App;