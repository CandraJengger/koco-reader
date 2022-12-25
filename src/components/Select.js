function Select({idComp, title = 'select', options = ''}) {
  return `
    <div class="krw__select krw__select__wrapper">
      <label for="${idComp}" style="text-transform: capitalize;">${title}</label>
      <select id="${idComp}" class="krw__select">
        ${options}
      </select>
    </div>
  `;
}

export default Select;
