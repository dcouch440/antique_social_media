import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { Context } from "../../../Context";
import checkUser from "../../../utils/checkUser";
import { DeleteButton } from './styles';


export default function DeleteAntique ({ antique }) {
  const { currentUser } = useContext(Context);
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
