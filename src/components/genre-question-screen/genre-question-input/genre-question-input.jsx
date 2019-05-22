import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionInput = ({item, onAnswer, isChecked, index}) => {
  const {} = item;
  return (
    <div className="game__answer">
      <input className="game__input visually-hidden"
        checked={isChecked}
        type="checkbox"
        name="answer"
        value={`answer-${index}`}
        id={`answer-${index}`}
        onChange={() => onAnswer(index)}
      />
      <label className="game__check" htmlFor={`answer-${index}`}>
        Отметить
      </label>
    </div>
  );
};

GenreQuestionInput.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default GenreQuestionInput;
