import React from 'react';
import {DropdownButton,MenuItem,Button,Glyphicon} from 'react-bootstrap';
import '../../styles/dropdown-styles.css';
import '../../styles/searchbar-styles.css';

class SearchFormGroup extends React.Component{
    render(){
        return(
            <div id="form-group">
                <input type="text" placeholder="  Search"/>
                <DropdownButton title="Filter By" id="dropdown">
                    <MenuItem eventKey="1">No Filter</MenuItem>
                    <MenuItem eventKey="1">Artists</MenuItem>
                    <MenuItem eventKey="2">Subjects</MenuItem>
                    <MenuItem eventKey="3">Recently Added</MenuItem>
                </DropdownButton>
                <Button bsSize="large"><Glyphicon glyph="search" /></Button>
            </div>
        );
    }
}

export default SearchFormGroup;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */
