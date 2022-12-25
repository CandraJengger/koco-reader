function Slider({
  idComp,
  title = 'slider',
  min = 0,
  max = 0,
  value = 0,
  step = 0
}) {
  return `
    <div class="krw__slider krw__slider__wrapper">
      <label for="${idComp}" style="text-transform: capitalize;">${title}</label>
      <div class="krw__slider__wrapper--input">
        <input class="krw__slider__range" type="range" min="${min}" max="${max}" value="${value}" step="${step}" id="${idComp}" />
        <span id="${idComp}-value" class="krw__slider__value">1</span>
      </div>
    </div>
  `;
}

export default Slider;
