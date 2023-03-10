import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <FilterInput
      style={{ fontFamily: 'Death Note Font' }}
      type="text"
      value={value}
      onChange={onChange}
    />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
