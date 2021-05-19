import axios from "axios";
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { Context } from "../../../Context";
import checkUser from "../../../utils/checkUser";

import {
  DeleteButton
} from './styles';

export default function DeleteImage ({ antique }) {
  const { currentUser } = useContext(Context);
  const history = useHistory();
  const loading = useRef(false);

  const { id, user_id } = antique;
  const isCurrentUsersPost = checkUser({ currentUser, user_id });

  const handleDeleteImages = async () => {
    try {
      const wasDeleted = await deleteImage();
      loading.current = false;
      if (wasDeleted) {
        history.push('/antiques');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteImage = async () => {
    try {
      if (loading.current === true) {
        return;
      }
      loading.current = true;

      if (!currentUser.admin) {
        if (!isCurrentUsersPost) {
          return;
        }
      }
      return axios
        .delete(`/antiques/${id}`, { withCredentials: true })
        .then(res => (res.status === 204));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    isCurrentUsersPost && (
      <DeleteButton onClick={handleDeleteImages}>
        Delete this post
      </DeleteButton>
    )
  );
}