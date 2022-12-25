import {ICONS} from '../constants/icons.js';
import ButtonIcon from './ButtonIcon.js';
import ModalOption from './ModalOption.js';
import Slider from './Slider.js';

function KocoWidget() {
  const {IcVolume, IcPlay} = ICONS;
  const buttons = [
    {
      variant: 'white',
      icon: IcVolume,
      customBackground: '',
      idComp: 'volumeBtn'
    },
    {
      variant: 'primary',
      icon: IcPlay,
      customBackground: '',
      idComp: 'playPauseBtn'
    },
    {
      variant: 'white',
      icon: '<span style="font-weight: 700;">...</span>',
      customBackground: '',
      idComp: 'toggleOption'
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
            idComp: 'modalOption',
            children: `
            ${Slider({
              idComp: 'pitch'
            })}
            ${Slider({
              idComp: 'speed'
            })}
            `
          })}
        </div>
      `;
}

export default KocoWidget;
