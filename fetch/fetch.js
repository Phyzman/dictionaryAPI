let action = document.getElementById("displayWords");
let search = document.getElementById("searchWords");

let words = "";
async function fetchWords() {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`
  );
  const data = await res.json();
  console.log("data is here: ", data);
  for (let m = 0; m < data.length; m++) {
    words = `
    <p>${data[0].word}</p>
     <p>${data[0].meanings[0].partOfSpeech}</p>
     <p>${data[0].meanings[0].definitions[0].definition}</p>
     <p>${data[0].phonetic}</p>
      `;
  }
  action.innerHTML = words;
  console.log("This is word here: ", data[0].phonetic);
}
