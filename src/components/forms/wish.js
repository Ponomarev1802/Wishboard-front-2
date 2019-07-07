import * as React from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import {Formik, Field, Form} from 'formik';
import {LinearProgress, MenuItem, Grid} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
} from 'formik-material-ui';

const styles = theme => ({
    root:{
        padding: 10,
        margin: "auto",
    },

  textField: {
      width: "100%",
},
});

const LowercasingTextField = (props) => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const {value} = event.target;
      props.form.setFieldValue(
        props.field.name,
        value ? value.toLowerCase() : ''
      );
    }}
  />
);

class WishForm extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Formik
    initialValues={{email: '', password: ''}}

    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}

    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}

    render={({submitForm, isSubmitting, values, setFieldValue}) => (
      <Form>
          <Grid container direction="column" xs={10} md={6} lg={4} spacing={16} className={classes.root}>
              <h1>Войдите</h1>
              <Grid item>
                  <Field className={classes.textField}
                      name="title"
                      type="text"
                      label="Заголовок"
                      component={LowercasingTextField}
                      variant="outlined"
                      InputLabelProps={{shrink: true}}
                  />
              </Grid>
              <Grid item>
                  <Field className={classes.textField}
                      name="description"
                      type="text"
                      label="Описание"
                      component={LowercasingTextField}
                      variant="outlined"
                      InputLabelProps={{shrink: true}}
                  />
              </Grid>
              <Grid item>
                  <Field className={classes.textField}
                      name="link"
                      type="text"
                      label="Ссылка"
                      component={LowercasingTextField}
                      variant="outlined"
                      InputLabelProps={{shrink: true}}
                  />
              </Grid>
              <Grid item>
                  <Field className={classes.textField}
                      name="cost"
                      type="text"
                      label="Стоимость"
                      component={LowercasingTextField}
                      variant="outlined"
                      InputLabelProps={{shrink: true}}
                  />
              </Grid>
        {isSubmitting && <LinearProgress />}
        <Button
          variant="raised"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Сохранить
        </Button>
          </Grid>

      </Form>
    )}
  />
        )
    }
}





export default withStyles(styles)(WishForm)