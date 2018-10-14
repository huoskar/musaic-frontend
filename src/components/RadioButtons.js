import React, { Component } from 'react';
import styled from 'styled-components';

const RadioField = styled.fieldset`
    width: 512px;
    padding: 2rem 0;
`;

class RadioButtons extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend >{'Genre'}</legend>
          <label>
            <input
              value="1"
              type="radio"
              name="interval"
            //   onChange={onChangeInterval}
            />
            1
          </label>
          <label>
            <input
              value="2"
              type="radio"
              name="interval"
            //   onChange={onChangeInterval}
            />
            2
          </label>
        </fieldset>
      </div>
    )
  }
}

export default RadioButtons;