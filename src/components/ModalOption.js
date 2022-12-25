function ModalOption({idComp, children = ''}) {
  return `
    <div class="krw__modal" id="${idComp}">
      ${children}
    </div>
  `;
}

export default ModalOption;
