const synth = window.speechSynthesis;

export function speak({
  text = '',
  pitch = '1',
  rate = '1',
  voice = '',
  onEnd = () => {},
  onError = () => {}
}) {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }

  if (text !== '') {
    const utterThis = new SpeechSynthesisUtterance(text);

    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
      onEnd(event);
    };

    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
      onError(event);
    };

    utterThis.voice = voice;
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
  }
}

export function getVoices() {
  return synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });
}
