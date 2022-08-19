
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import genres from '../../common/genre';
import artists from '../../common/artists';


class FormFilters extends Component {
  constructor() {
    super();
    this.state = {genresList: {genres},
    genres: [],
    artistsList: {artists} ,
    artists:[]  };
   //console.log(this.state.genresList);
  }
  render() {
    return (

      <div className="filterCard">
        <h3>FIND MOVIES BY:</h3>

        <ValidatorForm>
          <TextValidator id="standard-basic"
            type="text"
            label="Movie Name"
            variant="standard"
          />

          <FormControl >
            <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
            <Select
              multiple
              input={<Input id="select-multiple-checkbox-genre" />}
              renderValue={selected => selected.join(',')}
              value={this.state.genres}
             
             // onChange={this.genreSelectHandler}
            >
              {this.state.genresList.genres.map(genre => (
                <MenuItem key={genre.id} value={genre.name}>
                  <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                  <ListItemText primary={genre.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br></br><br></br>


          <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
            <Select
              multiple
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(',')}
              value={this.state.artists}
              
             // onChange={this.artistSelectHandler}
             >

              {this.state.artistsList.artists.map(artist => (
                <MenuItem key={artist.artistid} value={artist.first_name + " " + artist.last_name}>
                  <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                  <ListItemText primary={artist.first_name + " " + artist.last_name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <br></br><br></br>


          <TextValidator
            id="releaseDateStart"
            label="Release Date Start"
            type="date"
            defaultValue=""
            variant="standard"
            InputLabelProps={{ shrink: "true" }} />

          <br></br><br></br>

          <TextValidator
            id="releaseDateEnd"
            label="Release Date End"
            type="date"
            defaultValue=""
            variant="standard"
            InputLabelProps={{ shrink: "true" }} />

          <br></br><br></br>
         







          <Button variant="contained" color="primary" type="submit">APPLY</Button>
        </ValidatorForm>
      </div>
    )
  }
}
export default FormFilters;