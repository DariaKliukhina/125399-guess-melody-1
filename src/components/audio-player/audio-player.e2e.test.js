import Enzyme, {mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  isPlaying: false
};

it(`AudioPlayer change state then click on the button`, () => {
  const {src, isPlaying} = mock;
  const audioPlayer = mount(<AudioPlayer
    src={src}
    isPlaying={isPlaying}
    onPlayButtonClick={() => {}}
  />);

  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  audioPlayer.setState({isLoading: false});
  audioPlayer.update();
  const playButton = audioPlayer.find(`.track__button`);
  playButton.simulate(`click`, {preventDefault() {}});
  audioPlayer.update();
  expect(audioPlayer.state(`isPlaying`)).toEqual(true);
  playButton.simulate(`click`, {preventDefault() {}});
  audioPlayer.update();
  expect(audioPlayer.state(`isPlaying`)).toEqual(false);
});

it(`AudioPlayer invoke callback then click on the button`, () => {
  const {src, isPlaying} = mock;
  const clickHandler = jest.fn();
  const audioPlayer = mount(<AudioPlayer
    src={src}
    isPlaying={isPlaying}
    onPlayButtonClick={clickHandler}
  />);

  window.HTMLMediaElement.prototype.load = () => {};
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  audioPlayer.setState({isLoading: false});
  audioPlayer.update();
  const playButton = audioPlayer.find(`.track__button`);
  playButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
