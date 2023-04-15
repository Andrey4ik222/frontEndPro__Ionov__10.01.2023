const inputPostId = document.getElementById("post-id");
const postList = document.getElementById("post-list");

const url = "https://jsonplaceholder.typicode.com/posts";

let postsData = [];

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    postsData = posts;
  })
  .catch((error) => {
    console.error(error);
    alert("Error fetching posts. Please try again later.");
  });

function searchPost(posts) {
  postList.innerHTML = "";

  posts.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = `<p id="post-item">
    Title: ${elem.title}
    </p>
    <button id="btn-comments">Comments</button>`;
    postList.appendChild(li);

    const btnComments = document.getElementById("btn-comments");

    btnComments.addEventListener("click", () => {
      btnComments.style.display = "none";
      const p = document.createElement("p");
      p.innerHTML = `<p>Comments: ${elem.body}</p>`;
      postList.appendChild(p);
    });
  });
}

inputPostId.addEventListener("input", (event) => {
  const searchInputValue = event.target.value;
  if (
    (+searchInputValue >= 1 && +searchInputValue <= 100) ||
    searchInputValue === ""
  ) {
    const filteredUsers = postsData.filter((elem) => {
      if (elem.id === +searchInputValue) {
        return elem;
      }
    });
    searchPost(filteredUsers);
  } else {
    inputPostId.value = "";
    searchPost([]);
    alert("ID must be 1 - 100");
  }
});
