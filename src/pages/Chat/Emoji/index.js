import PropTypes from "prop-types";
import * as emojis from 'emojis-list';
import { useState } from 'react';

import {
  EmojiDisplayContainer,
  ButtonContainer,
  PageSelect,
  EmojiContainer
} from './styles';

export default function Emoji ({ handleClick, show }) {
  const [page, setPage] = useState(6);

  const filterAndSetEmojis = () => {
    const emojiArray = [...emojis];
    const emojiArrayPages = [];
    for (let i = 100; i < emojiArray.length; i += 100) {
      const currentPage = emojiArray.splice(i, 100);
      emojiArrayPages.push([...currentPage]);
    }
    return emojiArrayPages;
  };
  const emojiArrays = filterAndSetEmojis();


  const handlePageChange = e => {
    const { name } = e.target;
    e.stopPropagation();
    if (name === 'plus') {
      setPage(prev => {
        if (prev < emojiArrays.length - 1) {
          return prev += 1;
        } else {
          return prev;
        }
      });
    }
    if (name === 'minus') {
      setPage(prev => {
        if (prev !== 0) {
          return prev -= 1;
        } else {
          return prev;
        }
      });
    }
  };

  const emojiMapper = emojis => emojis.map(emoji => {
    return (
      <div
        key={emoji}
        onClick={e => handleClick(emoji, e)}
        className='emoji'
      >
        {emoji}
      </div>
    );
  });

  const toggleDisplay = show ? 'initial' : 'none';

  return (
    <>
      <EmojiDisplayContainer display={toggleDisplay}>
      <ButtonContainer>
          <PageSelect name='minus' onClick={handlePageChange}>
            -
          </PageSelect>
          <PageSelect name='plus' onClick={handlePageChange}>
            +
          </PageSelect>
        </ButtonContainer>
        <EmojiContainer>
          {emojiMapper(emojiArrays[page])}
        </EmojiContainer>
      </EmojiDisplayContainer>
    </>
  );
}

Emoji.defaultProps = {
  show: false
};

Emoji.propTypes = {
  handleClick: PropTypes.func,
  show: PropTypes.bool
};
