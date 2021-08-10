import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Button,
  FormData,
  Header,
  LabelsTitleYear,
  NameInput,
  TextArea,
  TitleInput,
  TitleYear,
  YearInput
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
      <FormData
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <LabelsTitleYear>
          <div>Title</div>
          <div>Year</div>
        </LabelsTitleYear>

        <TitleYear>
          <TitleInput
            required
            autoComplete='off'
            name='title'
            onChange={handleChange}
          />

          <YearInput
            required
            autoComplete='off'
            name='year'
            onChange={handleChange}
          />
        </TitleYear>

        <div>Name of Antique</div>
        <NameInput
          required
          autoComplete='off'
          name='name'
          onChange={handleChange}
        />

        <div>Tell us about this antique..</div>
        <TextArea
          required
          autoComplete='off'
          name='body'
          onChange={handleChange}
        />

        <Button>Submit</Button>
      </FormData>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func
};
