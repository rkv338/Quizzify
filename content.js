// document.addEventListener('onmouseup', function() {
//    const text = window.getSelection().toString();
//    if (text.length > 0) {
//     alert(text);
//    }
// });

document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      alert(selectedText);
    }
  });
