import React, { Component } from 'react';
import YTSearch from 'youtube-api-v3-search';
import SearchBar from './search_bar';
import keys from '../../config/dev-config';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      options: {
        q: '',
        part: 'snippet',
        type: 'video'
      }
    };
  }
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount() {
    const data = await YTSearch(keys.ytApikey, this.state.options);
    await this.setStateAsync(data);
  }

  onChangeHandler = e => {
    const newState = { ...this.state };
    newState.options.q = e.target.value;
    this.setState(newState);
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <SearchBar onChange={this.onChangeHandler} />
      </div>
    );
  }
}
