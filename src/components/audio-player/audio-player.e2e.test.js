import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from '../audio-player/audio-player';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  clickHandler: jest.fn(),
  isPlaying: false,
};

describe(`Track component`, () => {
  it(`renders correctly`, () => {
    const {src, clickHandler, isPlaying} = mock;

    const audioPlayer = mount(
        <AudioPlayer src={src} onPlayButtonClick={clickHandler} isPlaying={isPlaying} />
    );

    const playButton = audioPlayer.find(`button`);

    playButton.simulate(`click`, {preventDefault() {}});
    audioPlayer.update();
    expect(audioPlayer.state(`isPlaying`)).toEqual(true);

    playButton.simulate(`click`, {preventDefault() {}});
    audioPlayer.update();
    expect(audioPlayer.state(`isPlaying`)).toEqual(false);
  });
});
