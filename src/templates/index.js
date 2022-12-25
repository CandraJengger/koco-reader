import {on} from '../helpers/selector.js';
import elements from './elements.js';
import KocoWidget from '../components/KocoWidget.js';

const templates = () => KocoWidget();

export function init() {
  const {modalEl, volumeEl, playEl, sliderEl} = elements();

  on(modalEl.toggle, 'click', function () {
    modalEl.onToggle();
  });

  on(volumeEl.volumeBtn, 'click', function () {
    volumeEl.onMute(true);
  });

  on(playEl.playPauseBtn, 'click', function () {
    playEl.onPlay(true);
    console.log('speak');
  });

  on(sliderEl.pitchSlider, 'change', function () {
    sliderEl.onChange(sliderEl.pitchSlider);
  });

  on(sliderEl.speedSlider, 'change', function () {
    sliderEl.onChange(sliderEl.speedSlider);
  });
}

export default templates;
