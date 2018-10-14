import React, { Component } from 'react';
import styled from 'styled-components';

const RadioField = styled.div`
    width: 512px;
    padding: 1rem 0;
    margin: auto;
`;

const RadioButton = styled.label`
    padding: 1rem;
    margin: 0 10px;
    font-family: 'Roboto', sans-serif;
    color: #404041;
`;

const Legend = styled.legend`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    margin-bottom: 25px;
    color: #404041;
`;

class RadioButtons extends Component {

  render() {

    const { onChangeInterval, current } = this.props;

    return (
      <div>
        <RadioField>
          <Legend >{'Choose genre:'}</Legend>
          <RadioButton>
            <input
              value="pop"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'pop'}
            />
            Pop
          </RadioButton>
          <RadioButton>
            <input
              value="rock"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'rock'}
            />
            Rock
          </RadioButton>
          <RadioButton>
            <input
              value="jazz"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'jazz'}
            />
            Jazz
          </RadioButton>
          <RadioButton>
            <input
              value="rnb"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'rnb'}
            />
            R&B
          </RadioButton>
          <RadioButton>
            <input
              value="hiphop"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'hiphop'}
            />
            Hip-hop
          </RadioButton>
        </RadioField>
      </div>
    )
  }
}

export default RadioButtons;