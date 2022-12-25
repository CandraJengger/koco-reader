import {ICONS} from '../constants/icons.js';
import ButtonIcon from './ButtonIcon.js';
import ModalOption from './ModalOption.js';
import Slider from './Slider.js';
import Select from './Select.js';
import {getVoices} from '../helpers/web-speech-api.js';
import {$} from '../helpers/selector.js';
import {IDS} from '../constants/ids.js';

const _genereateVoices = () => {
  const select = $(`#${IDS.IdVoices}`);
  const voices = getVoices();
  if (select) {
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  }
  return;
};

export function initVoices() {
  _genereateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = _genereateVoices;
  }
}

function KocoWidget() {
  const {IcVolume, IcPlay} = ICONS;
  const {
    IdModalOption,
    IdPitchSlider,
    IdPlayPauseButton,
    IdRateSlider,
    IdToggleOption,
    IdVolumeButton,
    IdVoices
  } = IDS;
  const buttons = [
    {
      variant: 'white',
      icon: IcVolume,
      customBackground: '',
      idComp: IdVolumeButton
    },
    {
      variant: 'primary',
      icon: IcPlay,
      customBackground: '',
      idComp: IdPlayPauseButton
    },
    {
      variant: 'white',
      icon: '<span style="font-weight: 700;">...</span>',
      customBackground: '',
      idComp: IdToggleOption
    }
  ];

  return `
        <div class="krw krw__container">
          <div class="krw__player">
          ${buttons
            .map(({variant, icon, customBackground, idComp}) =>
              ButtonIcon({
                variant: variant,
                icon: icon,
                customBackground: customBackground,
                idComp: idComp
              })
            )
            .join('')}
          </div>
          <span class="krw__watermark">koco-reader</span>
          ${ModalOption({
            idComp: IdModalOption,
            children: `
            ${Slider({
              idComp: IdPitchSlider,
              title: 'pitch',
              min: 0,
              max: 2,
              value: 1,
              step: 0.1
            })}
            ${Slider({
              idComp: IdRateSlider,
              title: 'rate',
              min: 0.5,
              max: 2,
              value: 1,
              step: 0.1
            })}
            ${Select({
              idComp: IdVoices,
              title: 'Voice',
              options: ''
            })}
            `
          })}
        </div>
      `;
}

export default KocoWidget;
