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
  const arr2 = text.split('. ').join('.<br><br/>');
  const words = arr2.split(" ");
  let output = "";

  for (let i = 0; i < words.length; i++) {
    if ((i + 1) % 3 === 0) {
        //output += words[i] + " &middot ";
        output += words[i] + " ~ ";
    } else {
        output += words[i] + " ";
    }
  }

  //const arr3 = output.split('.').join('. <br><br/>');
  return output;
}
