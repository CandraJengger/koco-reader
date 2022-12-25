import {on} from '../helpers/selector.js';
import elements from './elements.js';
import KocoWidget, {initVoices} from '../components/KocoWidget.js';

const templates = {
  html: KocoWidget(),
  afterInjectHTML() {
    initVoices();
  }
};

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

  on(sliderEl.rateSlider, 'change', function () {
    sliderEl.onChange(sliderEl.rateSlider);
  });
}

export default templates;
