import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: any = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <img
      src={emojiMap[rating].src}
      alt={emojiMap[rating].alt}
      style={{
        width: emojiMap[rating].boxSize,
        height: emojiMap[rating].boxSize,
      }}
    />
  );
};

export default Emoji;
