import {ICONS} from '../constants/icons.js';
import {IDS} from '../constants/ids.js';
import {$} from '../helpers/selector.js';

const elements = () => {
  const {IcMute, IcPause, IcPlay, IcVolume} = ICONS;
  const {
    IdModalOption,
    IdPitchSlider,
    IdPlayPauseButton,
    IdRateSlider,
    IdToggleOption,
    IdVolumeButton
  } = IDS;

  return {
    modalEl: {
      toggle: $(`#${IdToggleOption}`),
      modal: $(`#${IdModalOption}`),
      onToggle() {
        this.modal.classList.toggle('krw__modal--open');
      }
    },
    volumeEl: {
      volumeBtn: $(`#${IdVolumeButton}`),
      onMute(isMute) {
        if (isMute) {
          this.volumeBtn.innerHTML = IcMute;
          return;
        }
        this.volumeBtn.innerHTML = IcVolume;
      }
    },
    playEl: {
      playPauseBtn: $(`#${IdPlayPauseButton}`),
      onPlay(isPlaying) {
        if (isPlaying) {
          this.playPauseBtn.innerHTML = IcPause;
          return;
        }
        this.playPauseBtn.innerHTML = IcPlay;
      }
    },
    sliderEl: {
      pitchSlider: $(`#${IdPitchSlider}`),
      rateSlider: $(`#${IdRateSlider}`),
      onChange(el) {
        $(`#${el.id}-value`).textContent = $(`#${el.id}`).value;
      }
    }
  };
};

export default elements;
