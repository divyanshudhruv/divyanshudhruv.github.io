import { artworks } from "./artworks";

type CardProps = {
  index: number;
  artwork?: (typeof artworks)[0];
};

const Card = ({ index, artwork }: CardProps) => {
  // Fallback to cycling through artworks if no specific artwork is provided
  const currentArtwork = artwork || artworks[index % artworks.length];

  return (
    <div className="card" style={{zIndex:99}}>
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${currentArtwork.src})`,
        }}
      />
      <div className="card-footer">
        <div className="card-artist">{currentArtwork.artist}</div>
      </div>
    </div>
  );
};

export default Card;
