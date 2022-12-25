import {ICONS} from '../constants/icons.js';
import {$} from '../helpers/selector.js';

const elements = () => {
  const {IcMute, IcPause, IcPlay, IcVolume} = ICONS;

  return {
    modalEl: {
      toggle: $('#toggleOption'),
      modal: $('#modalOption'),
      onToggle: function onToggle() {
        this.modal.classList.toggle('krw__modal--open');
      }
    },
    volumeEl: {
      volumeBtn: $('#volumeBtn'),
      onMute: function onMute(isMute) {
        if (isMute) {
          this.volumeBtn.innerHTML = IcMute;
          return;
        }
        this.volumeBtn.innerHTML = IcVolume;
      }
    },
    playEl: {
      playPauseBtn: $('#playPauseBtn'),
      onPlay: function onPlay(isPlaying) {
        if (isPlaying) {
          this.playPauseBtn.innerHTML = IcPause;
          return;
        }
        this.playPauseBtn.innerHTML = IcPlay;
      }
    }
  };
};

export default elements;
