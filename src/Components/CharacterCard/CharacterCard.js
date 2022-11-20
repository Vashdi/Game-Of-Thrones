import ReactTooltip from "react-tooltip";
import { createInfo } from "../../utils/helpers";
import { NOT_EXIST, NO_NAME } from "../../utils/consts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  CardFullName,
  CardImage,
  CardInfo,
  CharacterCardContainer,
} from "../Styles/styles";

const CharacterCard = ({ character }) => {
  const { fullName, imageUrl, title, family } = character;

  return (
    <CharacterCardContainer>
      <CardInfo data-testid="tooltip">
        <ReactTooltip multiline={true} />
        <HelpOutlineIcon data-tip={createInfo(fullName, title, family)} />
      </CardInfo>
      <CardImage data-testid="image" src={imageUrl} alt={NOT_EXIST} />
      <CardFullName data-testid="full-name">{fullName || NO_NAME}</CardFullName>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
