import {on} from '../helpers/selector.js';
import elements from './elements.js';
import KocoWidget from '../components/KocoWidget.js';

const templates = () => KocoWidget();

export function init() {
  const {modalEl, volumeEl, playEl} = elements();

  on(modalEl.toggle, 'click', function () {
    modalEl.onToggle();
  });

  on(volumeEl.volumeBtn, 'click', function () {
    volumeEl.onMute(true);
  });

  on(playEl.playPauseBtn, 'click', function () {
    playEl.onPlay(true);
  });
}

export default templates;
