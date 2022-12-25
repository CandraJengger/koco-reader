import {ICONS} from '../constants/icons.js';
import {$} from '../helpers/selector.js';

const elements = () => {
  const {IcMute, IcPause, IcPlay, IcVolume} = ICONS;

  return {
    modalEl: {
      toggle: $('#toggleOption'),
      modal: $('#modalOption'),
      onToggle() {
        this.modal.classList.toggle('krw__modal--open');
      }
    },
    volumeEl: {
      volumeBtn: $('#volumeBtn'),
      onMute(isMute) {
        if (isMute) {
          this.volumeBtn.innerHTML = IcMute;
          return;
        }
        this.volumeBtn.innerHTML = IcVolume;
      }
    },
    playEl: {
      playPauseBtn: $('#playPauseBtn'),
      onPlay(isPlaying) {
        if (isPlaying) {
          this.playPauseBtn.innerHTML = IcPause;
          return;
        }
        this.playPauseBtn.innerHTML = IcPlay;
      }
    },
    sliderEl: {
      pitchSlider: $('#pitch'),
      rateSlider: $('#rate'),
      onChange(el) {
        $(`#${el.id}-value`).textContent = $(`#${el.id}`).value;
      }
    }
  };
};

export default elements;
