function ButtonIcon({variant, icon, customBackground, idComp}) {
  const getVariant = (variant) => {
    if (variant === 'white') return 'krw-btn-icon--white';
    if (variant === 'primary') return 'krw-btn-icon--primary';
    if (variant === 'secondary') return 'krw-btn-icon--secondary';
  };

  return `
        <button
          id="${idComp}"
          class="krw-btn-icon ${getVariant(variant)}"
          style="${
            customBackground &&
            `background-color: ${customBackground} !important`
          }"
          type="button"
        >
          ${icon}
        </button>
      `;
}

export default ButtonIcon;
