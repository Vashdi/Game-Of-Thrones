import "./Gallery.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const Gallery = ({ characters }) => {
  return (
    <div data-testid="gallery" className="gallery-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Gallery;
