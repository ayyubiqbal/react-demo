import PropTypes from "prop-types";
import shortid from "shortid";
import Button from "../ui/Button";
const OperationSection = ({ handleArithmeticsOps, handleInputClear }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleArithmeticsOps("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleArithmeticsOps("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleArithmeticsOps("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleArithmeticsOps("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleArithmeticsOps("%"),
    },
    {
      id: shortid.generate(),
      text: "clear",
      onClick: handleInputClear,
    },
  ];
  return (
    <div>
      <p>Operations</p>
      <div>
        {operations.map((ops) => (
          <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmeticsOps: PropTypes.func.isRequired,
  handleInputClear: PropTypes.func.isRequired,
};

export default OperationSection;
