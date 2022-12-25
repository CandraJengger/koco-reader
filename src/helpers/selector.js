export function $(selector) {
  return document.querySelector(selector);
}

export function on(selector, event, callback) {
  selector.addEventListener(event, function (e) {
    callback(e);
  });
}
