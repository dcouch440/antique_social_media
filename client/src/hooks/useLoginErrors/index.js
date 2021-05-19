import { useState } from "react";

import {
  Errors
} from './styles';

export default function useLoginErrors () {
  const [errors, setErrors] = useState([]);

  const showErrors = () => {
    if (errors.length) {
      return (
        <Errors>
          {
            errors.map(error =>  (
                <div>
                  {error}
                </div>
            ))
          }
        </Errors>
      );
    }
  };

  return { errors, setErrors, showErrors };
}