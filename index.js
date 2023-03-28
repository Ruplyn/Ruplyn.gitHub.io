const textContainer = document.getElementById("text-container");
const button = document.getElementById("text-input");

let text =
  "Pushing to the stack is faster than allocating on the heap because the allocator never has to search for a place to store new data; that location is always at the top of the stack. Comparatively, allocating space on the heap requires more work, because the allocator must first find a big enough space to hold the data and then perform bookkeeping to prepare for the next allocation.";

button.addEventListener("click", () => {
    navigator.clipboard.readText().then(function (textFromClipboard) {
        text = textFromClipboard;
        const bionicText = `<p class="text">${bionicReading(text)}</p>`;
        textContainer.innerHTML = bionicText;
        });
});

function bionicReading(text) {
  const sentences = text.split('. ');

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(' ');
    const newWords = [];
  
    for (let j = 0; j < words.length; j++) {
      newWords.push(words[j]);
  
      if ((j + 1) % 3 === 0) {
        newWords.push('<span style="color:red;">_</span>');
      }
    }
  
    const newSentence = newWords.join(' ');
    sentences[i] = newSentence;
  }
  
  const output = sentences.join('. ');

  const arr3 = output.split('.').join('. <br><br/>');
  return arr3;
}
