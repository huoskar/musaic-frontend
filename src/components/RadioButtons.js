import React, { Component } from 'react';
import styled from 'styled-components';

const RadioField = styled.div`
    width: 1000px;
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

const Radio = styled.input`
    margin-right: 10px;
`;

class RadioButtons extends Component {

  render() {

    const { onChangeInterval, current } = this.props;

    return (
      <div>
        <RadioField>
          <Legend >{'Choose genre:'}</Legend>
          <RadioButton>
            <Radio
              value="pop"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'pop'}
            />
            Pop
          </RadioButton>
          <RadioButton>
            <Radio
              value="rock"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'rock'}
            />
            Rock
          </RadioButton>
          <RadioButton>
            <Radio
              value="jazz"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'jazz'}
            />
            Jazz
          </RadioButton>
          <RadioButton>
            <Radio
              value="rnb"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'rnb'}
            />
            R&B
          </RadioButton>
          <RadioButton>
            <Radio
              value="hiphop"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'hiphop'}
            />
            Hip-hop
          </RadioButton>
          <RadioButton>
            <Radio
              value="reggae"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'reggae'}
            />
            Reggae
          </RadioButton>
          <RadioButton>
            <Radio
              value="country"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'country'}
            />
            Country
          </RadioButton>
        </RadioField>
      </div>
    )
  }
}

export default RadioButtons;