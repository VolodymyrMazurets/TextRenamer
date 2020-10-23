
const textarea = document.getElementById("area");
const res = document.getElementById("res");

const string =
  "Rever,		Borja Gomez, Errette Dunn, Ignacio De Loera	; Fireflies.ai,		Krish Ramineni, Sam Udotong	;";
const stringFunc = (data) => {
  const array = data.split(";");
  array.pop();
  const changed = array.map((e) =>
    e.split(",").map((item, idx, arr) => {
      if (idx !== 0) return `${item.trim()} - ${arr[0]}`;
    })
  );
  for (let index = 0; index < changed.length; index++) {
    const element = changed[index];
    element.shift();
  }

  return changed;
};

textarea.oninput = () => {
  res.innerHTML = `
  <ul>
  ${_.flatten(stringFunc(textarea.value))
    .map((e) => `<li>${e}</li>`)
    .join("")}
  <ul >
  `;
};
