import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import FKTextInput from '../components/fktextinput';
import styles from '../styles/styles';

import { postBand } from '../reducers/newband';

export class NewBandForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: {}
    }
  }

  static BandSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    genre: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  render() {
    return (

      <Formik
        initialValues = {{
                name: '',
                genre: '',
              }}

        onSubmit = {({ name, genre, number_of_members,  number_of_followers, password }) => {
          console.log(`name: ${name}`);
          console.log(`genre: ${genre}`);
          console.log(`number_of_members: ${number_of_members}`);
          console.log(`number_of_followers: ${number_of_followers}`);
          console.log(`password: ${password}`);
          console.log(`status: ${this.state.status}`)
          const band = {
            name: name,
            genre: genre,
            number_of_members: number_of_members,
            number_of_fans: number_of_followers,
            password: password
          }
          this.props.postBand(band);
        }}

        validationSchema={ NewBandForm.BandSchema }

        render = {({
          handleSubmit,
          isSubmitting,
          errors,
          touched,
          status,
          isValid
        }) => (
          <View>
            <Text
              style = { styles.formLabel }
            >
              Name:
            </Text>
            <Field
              component = { FKTextInput }
              name = "name"
              disabled = { isSubmitting }
            />

            <Text
              style = { styles.formLabel }
            >
              Genre:
            </Text>
            <Field
              component = { FKTextInput }
              name = "genre"
              disabled = { isSubmitting }
            />

            <Text
              style = { styles.formLabel }
            >
              Number of followers:
            </Text>
            <Field
              component = { FKTextInput }
              name = "number_of_followers"
              disabled = { isSubmitting }
            />

            <Text
              style = { styles.formLabel }
            >
              Number of members:
            </Text>
            <Field
              component = { FKTextInput }
              name = "number_of_members"
              disabled = { isSubmitting }
            />

            <Text
              style = { styles.formLabel }
            >
              Password:
            </Text>
            <Field
              component = { FKTextInput }
              name = "password"
              disabled = { isSubmitting }
            />

            {this.state.status.succeeded &&
              <Text style={styles.rootSucceeded}>SUCCEEDED</Text>
            }
            {this.state.status.failed &&
              <Text style={styles.rootFailed}>FAILED</Text>
            }
            <Button
              title = "Submit Form"
              onPress = {handleSubmit}
              disabled={!isValid || isSubmitting}
            />
          </View>
        )}

        />
    );
  }
}

const mapStateToProps = state => {
  let bandDetail = state.detail
  if(bandDetail) {
    return {
      detail: bandDetail
    };
  } else {
    console.log("no band details");
    return {};
  }

};

const mapDispatchToProps = {
  postBand
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewBandForm));
