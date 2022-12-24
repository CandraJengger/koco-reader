class KocoWidget extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button>
        this is widget
      </button>
    `;
  }
}

customElements.define('koco-widget', KocoWidget);
