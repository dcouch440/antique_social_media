import React, { useState } from 'react';
import {
  TextArea, TitleInput, FormData, YearInput,
  TitleYear, LabelsTitleYear, NameInput, Button
} from './styles';

const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    title: '', body: '', year: 0, name: ''
  });

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({...prev,
      [name] : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <FormData onSubmit={handleSubmit}>

      <LabelsTitleYear>
        <div>Title</div>
        <div>Year</div>
      </LabelsTitleYear>

      <TitleYear>
        <TitleInput
          required='true'
          onChange={handleChange}
          autocomplete="off"
          name='title'
        />

        <YearInput
          required='true'
          onChange={handleChange}
          autocomplete="off"
          name='year'
        />
      </TitleYear>

      <div>Name of Antique</div>
      <NameInput
        required='true'
        onChange={handleChange}
        autocomplete="off"
        name='name'
      />

      <div>Tell us about this antique..</div>
      <TextArea
        required='true'
        onChange={handleChange}
        autocomplete="off"
        name='body'
      />

      <Button>Submit</Button>
    </FormData>
  )
}

export default Form;