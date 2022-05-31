import PropTypes from "prop-types";
import NumberFields from "../ui/NumberFields";

const InputSection = ({ inputs, handleInputFields }) => {
  return (
    <div>
      <p>Inputs</p>
      <NumberFields
        type="number"
        value={inputs.a}
        onChange={handleInputFields}
        name="a"
      />
      <NumberFields
        type="number"
        value={inputs.b}
        onChange={handleInputFields}
        name="b"
      />
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropTypes.func.isRequired,
};

export default InputSection;
