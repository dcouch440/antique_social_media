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
            errors.map((error, index) =>  (
              <div key={index}>
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