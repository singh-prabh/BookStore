import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addFlashMessage } from './actions/flashMessages';
import InitializeFromStateForm from './UserProfileForm2';
import { submitForm } from './reducers/profile';

class UserProfilePage2 extends Component {
  handleSubmit = (values) => {
    this.props.submitForm(values).then(
      () => {
        this.props.addFlashMessage({
          type: "success",
          text : "Изменения сохранены",
        })
      },
      (err) => {
        this.props.addFlashMessage({
          type: "error",
          text : "Ошибка сохранения",
        })
      }
    );
  }

  render() {
    return (
      <div className= "columns" >
        <div className= "column is-6 is-offset-3">
          <h4 className="subtitle">Настройки профиля</h4>
          <InitializeFromStateForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { submitForm, addFlashMessage })(UserProfilePage2);