const wrap = (element, className) => {
  const regex = new RegExp(/([\da-z\.\-\!"#\$%&'\(\)=\^~\|@`\[\{\]\}\*\:\+;\?\/\,_\\<>]+)/ig);
  const text = element.innerText.replace(regex, `<span class="${className}">$1</span>`);
  element.innerHTML = text;
};

const wrapSingleByteText = (selector = '', options = {}) => {
  const elements = Array.from(document.querySelectorAll(selector));
  Array.from(elements).forEach(element => {
    wrap(element, options.className);
  });
};

export default wrapSingleByte;
