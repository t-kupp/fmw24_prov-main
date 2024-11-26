// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

const imagesList = document.querySelector("#images-list");

async function displayData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  const slicedData = data.slice(0, 10);
  console.log(slicedData);

  slicedData.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.thumbnailUrl;
    imagesList.appendChild(image);

    image.addEventListener("click", () => {
      alert(img.title);
    });
  });
}

displayData();
