import React from 'react'
import { TextValidator } from "react-material-ui-form-validator";


function textfield(props) {
    return (
        <div>
              <TextValidator
                variant={props.variant}
                margin={props.margin}
                fullWidth
                label={props.label}
                onChange={props.onChange}
                name={props.name}
                value={props.value}
                validators={props.validators}
                errorMessages={props.errorMessages}
                autoComplete={props.autoComplete}
              />
        </div>
    )
}

export default textfield
