import AntiquesSlideShow from "../AntiqueSlideShow";
import PropTypes from "prop-types";

export default function AntiqueImages ({ images, newUpload, setNewUpload }) {
  const hasImages = Boolean(images.length);

  return (
    hasImages && <AntiquesSlideShow
      antiqueImages={images}
      newUpload={newUpload}
      setNewUpload={setNewUpload}
    />
  );
}
AntiqueImages.propTypes = {
  images: PropTypes.array,
  newUpload: PropTypes.bool,
  setNewUpload: PropTypes.func
};
