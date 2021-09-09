import { useState } from "react";
import { Errors } from './styles';

/**
 * @description used to check if input errors are thrown.
 * @returns a div element that displays errors from yup.
 */

export default function useLoginErrors () {
  const [errors, setErrors] = useState([]);

  const showErrors = () => {
    if (!errors.length) { return; }
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
  };

  return { errors, setErrors, showErrors };
}