import axios from "axios";
import { useEffect, useState } from "react";
import AntiquesSlideShow from "../AntiqueSlideShow";

export default function AntiqueImages ({ antiqueId, newUpload, setNewUpload }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`/images/${antiqueId}`, { withCredentials: true })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setImages([...res.data]);
        }
      })
      .catch(err => console.log(err));
  }, [antiqueId, newUpload]);

  return (
    images.length && <AntiquesSlideShow
      antiqueImages={images}
      newUpload={newUpload}
      setNewUpload={setNewUpload}
    />
  );
}