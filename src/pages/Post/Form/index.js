import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  TextArea,
  TitleInput,
  FormData,
  YearInput,
  TitleYear,
  LabelsTitleYear,
  NameInput,
  Button,
  Header
} from './styles';

export default function Form ({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '', body: '', year: 0, name: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev,
      [name] : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <Header>
        Post
      </Header>
      <FormData autoComplete='off' onSubmit={handleSubmit}>
        <LabelsTitleYear>
          <div>Title</div>
          <div>Year</div>
        </LabelsTitleYear>

        <TitleYear>
          <TitleInput
            required
            onChange={handleChange}
            autoComplete='off'
            name='title'
          />

          <YearInput
            required
            onChange={handleChange}
            autoComplete='off'
            name='year'
          />
        </TitleYear>

        <div>Name of Antique</div>
        <NameInput
          required
          onChange={handleChange}
          autoComplete='off'
          name='name'
        />

        <div>Tell us about this antique..</div>
        <TextArea
          required
          onChange={handleChange}
          autoComplete='off'
          name='body'
        />

        <Button>Submit</Button>
      </FormData>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func
};
