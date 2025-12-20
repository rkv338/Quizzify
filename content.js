// document.addEventListener('onmouseup', function() {
//    const text = window.getSelection().toString();
//    if (text.length > 0) {
//     alert(text);
//    }
// });
require('dotenv').config();
document.addEventListener('mouseup', async () => {
    console.log('mouseup');
    
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      // send selected text to chatgpt for generating a 20 question multiple choice quiz
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: selectedText }],
        }),
      });
      const data = await response.json();
      alert(data.choices[0].message.content);
    }
  });
