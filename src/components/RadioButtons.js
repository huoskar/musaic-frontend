import React, { Component } from 'react';
import styled from 'styled-components';

import jazz from '../media/jazz.png';
import rock from '../media/rock.png';
import all from '../media/all.png';
import country from '../media/country.png';
import edm from '../media/edm.png';
import hiphop from '../media/hiphop.png';
import metal from '../media/metal.png';
import reggae from '../media/reggae.png';

const RadioField = styled.div`
    width: 512px;
    padding: 1rem 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
    margin-top: 25px;
    color: #404041;
`;

const Radio = styled.input`
    margin-right: 10px;
`;

const Icon = styled.img`
    width: 30px;
`;

class RadioButtons extends Component {

  render() {

    const { onChangeInterval, current } = this.props;

    return (
      <div>
        <Legend >{'Choose genre:'}</Legend>
        <RadioField>
          <RadioButton>
            <Radio
              value="all"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'all'}
            />
            <Icon src={all} alt='all' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="metal"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'metal'}
            />
            <Icon src={metal} alt='metal' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="rock"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'rock'}
            />
            <Icon src={rock} alt='rock' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="jazz"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'jazz'}
            />
            <Icon src={jazz} alt='jazz' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="edm_dance"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'edm_dance'}
            />
            <Icon src={edm} alt='edm' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="hiphop"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'hiphop'}
            />
            <Icon src={hiphop} alt='hiphop' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="reggae"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'reggae'}
            />
            <Icon src={reggae} alt='reggae' />
          </RadioButton>
          <RadioButton>
            <Radio
              value="country"
              type="radio"
              name="genre"
              onChange={onChangeInterval}
              checked={current === 'country'}
            />
            <Icon src={country} alt='country' />
          </RadioButton>
        </RadioField>
      </div>
    )
  }
}

export default RadioButtons;