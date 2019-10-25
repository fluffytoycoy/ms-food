import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteMenuItem } from '../../../actions/actions';
import { connect } from 'react-redux';
import './DeleteDialog.scss';

function DeleteDialog(props) {

  const closeDialog = () => {
    props.toggleMenuOpen(false)
  }

  const confirmDelete = () => {
    props.deleteMenuItem(props.menuItem)
    closeDialog();
  }

  return (

      <div>
        {props.menuItem ?
          <Dialog
            open={props.open}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="delete-dialog"
          >
            <DialogTitle id="alert-dialog-title">
              Confirm deletion?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Name: {props.menuItem.name}<br/>
                Price: {props.menuItem.price}<br/>
                Category: {props.menuItem.category}<br/>
                Type: {props.menuItem.type}<br/>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog} className="btn-cancel">
                Cancel
              </Button>
              <Button onClick={confirmDelete} className="btn-delete" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        :<></>
      }
    </div>
  );
}

const mapStateToProps = state =>{
  return state;
}

export default connect(
    mapStateToProps,
    { deleteMenuItem }
)(DeleteDialog)
