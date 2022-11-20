import { GalleryContainer } from "../Styles/styles";
import CharacterCard from "../CharacterCard/CharacterCard";

const Gallery = ({ characters }) => {
  return (
    <GalleryContainer data-testid="gallery">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
