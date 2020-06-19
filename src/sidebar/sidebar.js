import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.setState = {
            addingNote: false,
            title: null
        };
    }
    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        return(
            <div className={classes.sidebarContainer}>
                <Button 
                    onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? 'Cansel' : 'New Note'}</Button>
                    {
                        this.state.addingNote ?
                        <div>
                            <input type='text'
                                className={classes.newNoteInput}
                                placeholder='Enter note title'
                                onKeyUp={(e) => this.updateTitle(e.target.value)}>
                            </input>
                            <Button
                            className={classes.newNoteSubmitBtn}
                            onclick={this.newNote}>Submit Note</Button>
                        </div> :
                        null
                    }
            </div>
        );
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newNote = () => {
        console.log(this.state);
    }
}

export default withStyles(styles)(SidebarComponent);