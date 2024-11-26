// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

const postsList = document.querySelector("#posts-list");

async function displayData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  data.forEach((post) => {
    const container = document.createElement("div");

    const title = document.createElement("h4");
    title.innerText = post.title;
    container.appendChild(title);

    const body = document.createElement("p");
    body.innerText = post.body;
    container.appendChild(body);

    postsList.appendChild(container);
  });
}

displayData();
