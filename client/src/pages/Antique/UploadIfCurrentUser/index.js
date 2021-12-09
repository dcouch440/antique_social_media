import { Context } from "../../../Context";
import PropTypes from "prop-types";
import UploadModal from "../../../components/UploadModal";
import { UploadModalButton } from './styles';
import checkUser from "../../../utils/checkUser";
import { useContext } from "react";

export default function UploadIfCurrentUser ({ show, antique, handleModalShowChange, setNewUpload }) {
  const { currentUser } = useContext(Context);

  const hideIfModal = () => !show&& (
    <UploadModalButton
      onClick={handleModalShowChange}
    >
      Upload
    </UploadModalButton>
  );

  const showIfModal = () => show&& (
    <UploadModal
      antique={antique}
      currentUser={currentUser}
      modalShowChange={handleModalShowChange}
      route='/antiques/images'
      setNewUpload={setNewUpload}
      startMessageText='Upload an image of your antique.'
    />
  );

  return (
    checkUser({ currentUser, user_id: antique.user_id }) && (
      <>
        {hideIfModal()}
        {showIfModal()}
      </>
    )
  );
}

UploadIfCurrentUser.propTypes = {
  antique: PropTypes.shape({
    user_id: PropTypes.number
  }),
  handleModalShowChange: PropTypes.func,
  setNewUpload: PropTypes.func,
  show: PropTypes.bool
};
