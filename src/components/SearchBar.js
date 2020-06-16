import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  // this function will update our search term in the state
  handleChange = (event) => {
    
    // console.log(event.target.value)

    this.setState({searchTerm: event.target.value});
  };

  handleSubmit = (event) => {
    
    const {searchTerm} = this.state;
    const {onFormSubmit} = this.props;
    //   console.log(searchTerm)
    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{padding: '25px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
