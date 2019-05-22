import React from 'react';
import PropTypes from 'prop-types';
import GenreQuestionInput from "./genre-question-input/genre-question-input.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      activePlayer: -1,
      userAnswer: new Array(answers.length).fill(false),
    };

    this._submitForm = this._submitForm.bind(this);
    this._onChangeActivePlayer = this._onChangeActivePlayer.bind(this);
    this._onInputChanged = this._onInputChanged.bind(this);
  }

  _submitForm(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.userAnswer);
  }

  _onChangeActivePlayer(i) {
    const isActivePlayer = -1;

    this.setState({
      activePlayer: this.state.activePlayer === i ? isActivePlayer : i
    });
  }

  _onInputChanged(i) {
    const self = this;
    return function () {
      const userAnswer = [...self.state.userAnswer];
      userAnswer[i] = !userAnswer[i];
      self.setState({userAnswer});
    };
  }

  render() {
    const {question} = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this._submitForm}>
          {answers.map((it, i) => (
            <div className="track" key={`answer-${i}`}>
              <AudioPlayer
                src={it.src}
                isPlaying={i === this.state.activePlayer}
                onPlayButtonClick={() => this._onChangeActivePlayer(i)}
              />
              <GenreQuestionInput
                key={i}
                index={i}
                onAnswer={this._onInputChanged(i)}
                item={it}
                isChecked={this.state.userAnswer[i]}
              />
            </div>
          )
          )
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}


GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
