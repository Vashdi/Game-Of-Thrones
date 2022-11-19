import ReactTooltip from "react-tooltip";
import "../CharacterCard/CharacterCard.css";
import { NOT_EXIST, NO_NAME } from "../../utils/consts";
import { createInfo } from "../../utils/helpers";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const CharacterCard = ({ character }) => {
  const { fullName, imageUrl, title, family } = character;

  return (
    <div className="character-card-container">
      <div data-testid="tooltip" className="card-info">
        <ReactTooltip multiline={true} />
        <HelpOutlineIcon data-tip={createInfo(fullName, title, family)} />
      </div>
      <img
        data-testid="image"
        className="card-image"
        src={imageUrl}
        alt={NOT_EXIST}
      />
      <div data-testid="full-name" className="card-fullName">
        {fullName || NO_NAME}
      </div>
    </div>
  );
};

export default CharacterCard;
