import React from 'react';
import axios from 'axios';

import {DropdownButton,MenuItem,Button,Glyphicon} from 'react-bootstrap';

import BottomContainer from './Body/BottomContainer';
import CustomCarousel from './Header/CustomCarousel';
import LoginButtonGroup from './Header/LoginButtonGroup';

import '../styles/top-container-styles.css';
import '../styles/link-styles.css';
import '../styles/dropdown-styles.css';
import '../styles/searchbar-styles.css';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: ' ',
            blockFilter:' ',
            responseData:[],
            dropDownTitle: 'Filter By',
            dropDownItems: ['Artist','Work','Subject']
        }
        this.updateImgList('recent');
    }

    dropDownSelect(selectedItem,index){
        var items = this.state.dropDownItems;
        var replace;

        if(this.state.dropDownTitle == 'Filter By'){
            replace = 'No Filter';
        }else{
            replace = this.state.dropDownTitle;
        }
        items[index] = replace;
        this.setState({dropDownTitle:selectedItem,dropDownItems:items});
    }

    updateImgList(filterChoice){
        var baseRequest = "http://localhost:9090/get/";
        var fullRequest = baseRequest + filterChoice;
        if(filterChoice == 'recent')
            filterChoice = 'single';
        else{
            var blockFilter = filterChoice;
            filterChoice = 'block';
        }
        axios.get(fullRequest).then(response => this.setState({blockFilter: blockFilter,filter:filterChoice,responseData:response.data}))
        .catch(function (error) {
            console.log(error);
        });
    }

    searchQuery(searchTerm,filterChoice){
        var baseRequest = "http://localhost:9090/get/";
        var fullRequest = baseRequest + searchTerm + '/' + filterChoice;
        filterChoice = 'single';
        console.log('search initiated' + fullRequest);
        axios.get(fullRequest).then(response => this.setState({filter:filterChoice,responseData:response.data}))
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){

        var element;
        var searchTerm;

        element = document.getElementById("search-bar");
        if(element != null){
            searchTerm = element.value;
        }

        return(
            <div>
                <div id="top-container">
                    <CustomCarousel></CustomCarousel>
                    <LoginButtonGroup></LoginButtonGroup>
                    <div id="search-container">
                        <div id="logo">
                            <img height="90" width="250"src="../../assets/whitelogo.png"/>
                        </div>
                        <div id="form-group">
                            <input type="text" placeholder="Search" id="search-bar"/>
                            <DropdownButton title={this.state.dropDownTitle} id="dropdown">
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[0],0)}>{this.state.dropDownItems[0]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[1],1)}>{this.state.dropDownItems[1]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[2],2)}>{this.state.dropDownItems[2]}</MenuItem>
                            </DropdownButton>
                            <Button bsSize="large" onClick={this.searchQuery.bind(this,searchTerm,this.state.dropDownTitle)}><Glyphicon glyph="search" /></Button>
                        </div>
                        <div id="quick-search-group">
                            <a id="link-style" onClick={this.updateImgList.bind(this,'artist')}><Glyphicon glyph="user"/> Artists</a>
                            <a id="link-style" onClick={this.updateImgList.bind(this,'subject')}><Glyphicon glyph="picture"/> Subjects</a>
                            <a id="link-style" onClick={this.updateImgList.bind(this,'recent')}><Glyphicon glyph="calendar"/> Recently Added</a>
                        </div>
                    </div>
                </div>
                <BottomContainer filter= {this.state.filter} responseData={this.state.responseData} blockFilter={this.state.blockFilter}></BottomContainer>
            </div>
        );
    }
}

export default MainPage;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */
