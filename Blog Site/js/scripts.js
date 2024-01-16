// blog posts
const blogPosts = [
  {
    id: 1,
    title: "Post 1",
    category: "Tech",
    author: "Author 1",
    image: "images/image_1.png",
  },
  {
    id: 2,
    title: "Post 2",
    category: "Social-Media",
    author: "Author 2",
    image: "images/image_2.png",
  },
  {
    id: 3,
    title: "Post 3",
    category: "Tech",
    author: "Author 3",
    image: "images/image_3.png",
  },
  {
    id: 4,
    title: "Post 4",
    category: "Social-Media",
    author: "Author 4",
    image: "images/image_4.png",
  },
];

// Function to display blog posts
function displayPosts(posts) {
  const blogPostsContainer = document.querySelector(".main-content");
  if (!blogPostsContainer) {
    console.error("Container with class 'main-content' not found.");
    return;
  }
  blogPostsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post", "clearfix");
    postElement.innerHTML = `
      <img src="${post.image}" alt="" class="post-image">
      <div class="post-preview">
        <h2><a href="single.html">${post.title}</a></h2>
        <p><strong>Category:</strong> ${post.category}</p>
        <p><strong>Author:</strong> ${post.author}</p>
        <button onclick="openSinglePage(${post.id})">Read More</button>
      </div>
    `;
    blogPostsContainer.appendChild(postElement);
  });
}

function initializeBlogPosts() {
  displayPosts(blogPosts);
}
// Function to open single.html page
function openSinglePage(postId) {
  // Find the post with the given ID
  const selectedPost = blogPosts.find((post) => post.id === postId);

  if (selectedPost) {
    // url to redirect
    const singlePageUrl = `single.html?id=${postId}`;
    window.location.href = singlePageUrl;
  } else {
    console.error(`Post with ID ${postId} not found.`);
  }
}
// Get the post ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Find the post with the given ID
const selectedPost = blogPosts.find((post) => post.id === parseInt(postId));

if (selectedPost) {
  // Update the post details on the page
  document.querySelector(".post-title").textContent = selectedPost.title;
  // Update other post details as needed
} else {
  console.error(`Post with ID ${postId} not found.`);
}

// Function to filter and search posts
function filterSelection() {
  const keyword = document.getElementById("search-keyword").value.toLowerCase();
  const category = document
    .getElementById("search-category")
    .value.toLowerCase();
  const author = document.getElementById("search-author").value.toLowerCase();

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(keyword) &&
      (category === "" || post.category.toLowerCase() === category) &&
      (author === "" || post.author.toLowerCase() === author)
  );

  displayPosts(filteredPosts);
}
// Call filterSelection() to display all posts when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Call filterSelection() with empty values to display all posts
  filterSelection();
});
function validateForm() {
  // Get input elements from the form
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConf = document.getElementById("passwordConf").value;

  // Reset previous errors
  document.getElementById("error-message").innerHTML = "";

  // Validate username
  if (username.trim() === "") {
    displayErrorform("Username is required.");
    return false;
  }

  // Validate email
  if (email.trim() === "") {
    displayErrorform("Email is required.");
    return false;
  }

  // Validate password
  if (password.trim() === "") {
    displayErrorform("Password is required.");
    return false;
  }

  // Validate password confirmation
  if (password !== passwordConf) {
    displayErrorform("Passwords do not match.");
    return false;
  }

  return true;
}

function displayErrorform(message) {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerHTML = `<li>${message}</li>`;
}

// code for login fucntion
function validateLogin() {
  // Get input elements from the form
  const usernamelog = document.getElementById("usernamelogin").value;
  const passwordlog = document.getElementById("passwordlogin").value;

  // Reset previous errors
  resetErrors();

  // Validate username
  if (usernamelog.trim() === "") {
    displayError("Username is required.");
    return false;
  }

  // Validate password
  if (passwordlog.trim() === "") {
    displayError("Password is required.");
    return false;
  }

  return true;
}

function resetErrors() {
  // for making it work with the full code to reset errors
}

function displayError(message) {
  const errorMessageElementlogin = document.getElementById("error-message1");
  errorMessageElementlogin.innerHTML = `<li>${message}</li>`;
}
