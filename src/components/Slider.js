function Slider({idComp}) {
  return `
    <div class="krw__slider krw__slider__wrapper">
      <label for="${idComp}" style="text-transform: capitalize;">${idComp}</label>
      <div class="krw__slider__wrapper--input">
        <input class="krw__slider__range" type="range" min="0" max="2" value="1" step="0.1" id="${idComp}" />
        <span id="${idComp}-value" class="krw__slider__value">1</span>
      </div>
    </div>
  `;
}

export default Slider;
