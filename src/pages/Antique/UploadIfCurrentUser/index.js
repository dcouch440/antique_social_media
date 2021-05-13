import { useContext } from "react";
import { Context } from "../../../Context";
import { UploadModalButton } from './styles';
import Modal from '../Modal';
import checkUser from "../../../utils/checkUser";

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
      setNewUpload={setNewUpload}
      antique={antique}
      modalShowChange={handleModalShowChange}
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