import PropTypes from "prop-types";
import NumberFields from "../ui/NumberFields";

const InputSection = ({ inputs, handleInputFields }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#efefef",
        borderRadius: "0.10rem",
      }}
    >
      <h3
        style={{
          fontFamily: "Arial",
          textAlign: "center",
          fontSize: "1.5rem",
          color: "#212121",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
        Inputs
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
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
