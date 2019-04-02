import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../action/index";

class StreamCreate extends React.Component {
  errorHandler(error, touched) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.errorHandler(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
   //console.log("form Props:", this.props);
    return (
      <form
        className="ui form error col-8"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          placeholder="Enter your Name"
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui blue button">Create Stream</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter value...";
  }
  if (!formValues.description) {
    errors.description = "You must enter value...";
  }

  return errors;
};

const wrappedForm = reduxForm({
  form: "RegisterStream",
  validate
})(StreamCreate);

export default connect(null, {createStream})(wrappedForm);
