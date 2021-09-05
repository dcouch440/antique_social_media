import PropTypes from "prop-types";
import { useContext } from "react";
import UploadModal from "../../../components/UploadModal";
import { Context } from "../../../Context";
import checkUser from "../../../utils/checkUser";
import { UploadModalButton } from './styles';


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
      route='/images'
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
