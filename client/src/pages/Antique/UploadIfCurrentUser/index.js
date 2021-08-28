import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../../Context";
import checkUser from "../../../utils/checkUser";
import Modal from '../Modal';
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
    <Modal
      antique={antique}
      modalShowChange={handleModalShowChange}
      setNewUpload={setNewUpload}
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
  setNewUpload: PropTypes.bool,
  show: PropTypes.bool
};
