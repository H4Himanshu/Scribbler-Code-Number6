function showCreatePost() {
  var modal = document.getElementById("create-post-popup");
  modal.style.display = "flex";
}

function hideCreatePostModal() {
  var modal = document.getElementById("create-post-popup");
  modal.style.display = "none";
}

function navigateToBlogList() {
  location.href = "html/postslist.html";
}
