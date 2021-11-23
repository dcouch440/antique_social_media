import { useContext, useRef } from "react";

import { DeleteButton } from './styles';
import PropTypes from "prop-types";
import { SessionContext } from "../../../context/Session";
import axios from "axios";
import checkUser from "../../../utils/checkUser";
import { useHistory } from "react-router";

export default function DeleteAntique ({ antique }) {
  const { currentUser } = useContext(SessionContext);
  const history = useHistory();
  const requestActive = useRef(false);

  const { id, user_id } = antique;
  const isCurrentUsersPost = checkUser({ currentUser, user_id });

  const handleDeleteImages = async () => {
    const wasDeleted = await deleteImage();
    requestActive.current = false;
    if (wasDeleted) { history.push('/antiques'); }
  };

  const deleteImage = async () => {
    if (requestActive.current === true) { return; }
    requestActive.current = true;
    if (!currentUser.admin && !isCurrentUsersPost) { return; }

    return axios
      .delete(`/antiques/${id}`,
        { user_id: currentUser.id },
        { withCredentials: true }
      )
      .then(res => (res.status === 204))
      .catch(err => console.log(err));
  };

  return (
    isCurrentUsersPost &&
      <DeleteButton onClick={handleDeleteImages}>
        Delete this post
      </DeleteButton>
  );
}

DeleteAntique.propTypes = {
  antique: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number
  })
};
