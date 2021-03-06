// @flow

import React, { Component } from 'react';
import { isEqual } from 'lodash';
import jsonSchemaDefaults from 'json-schema-defaults';
import Form from './FrogForm';

import { calculateSchema, hideConditional } from './enhancedFormUtils';

class EnhancedForm extends Component<
  Object,
  { formData?: ?Object, schema?: Object }
> {
  hides: string[];

  formData: ?Object;

  state = {};

  componentWillMount() {
    if (!this.props.formData && jsonSchemaDefaults(this.props.schema) !== {}) {
      this.updateSchema(this.props);
    } else {
      this.updateSchema(this.props);
      this.formData = this.props.formData;
      this.setState({ formData: this.props.formData });
    }
  }

  componentDidUpdate = (prevProps: Object) => {
    if (
      !isEqual(this.props.schema, prevProps.schema) ||
      !isEqual(this.props.reload, prevProps.reload) ||
      !isEqual(this.props.uiSchema, prevProps.uiSchema) ||
      !isEqual(this.props.id, prevProps.id)
    ) {
      this.hides = [];
      this.formData = this.props.formData;
      // eslint-disable-next-line
      this.setState({ formData: this.props.formData });
      this.updateSchema(this.props, true);
    }
  };

  onChange = (e: { formData: Object }) => {
    this.formData = e.formData;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
    this.updateSchema(this.props);
  };

  updateSchema = (props: Object, newSchema: boolean = false) => {
    const [schema, hides] = calculateSchema(
      this.formData ||
        this.props.formData ||
        jsonSchemaDefaults(this.props.schema),
      props.schema,
      props.uiSchema,
      this.hides || [],
      (this.state && !newSchema && this.state.schema) || this.props.schema
    );
    this.hides = hides;
    if (
      JSON.stringify((this.state && this.state.schema) || {}) !==
      JSON.stringify(schema)
    ) {
      this.setState({
        schema,
        formData: hideConditional(
          this.formData || {},
          props.schema,
          props.uiSchema || {}
        )
      });
    }
  };

  render() {
    return this.state.schema ? (
      <Form
        {...this.props}
        onChange={this.onChange}
        schema={this.state.schema}
        formData={this.state.formData}
      />
    ) : null;
  }
}

export default EnhancedForm;
