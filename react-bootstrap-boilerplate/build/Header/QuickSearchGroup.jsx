import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import '../../styles/link-styles.css';

class QuickSearchGroup extends React.Component{
    render(){
        return(
            <div id="quick-search-group">
                    <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="user"/> Artists</a>
                    <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="picture"/> Subjects</a>
                    <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="calendar"/> Recently Added</a>
            </div>
        );
    }
}

export default QuickSearchGroup;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */
