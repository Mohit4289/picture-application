document.addEventListener("DOMContentLoaded", function () {
  const searchbtn = document.getElementById("btn-primary");
  searchbtn.onclick = async function () {
    const category = document.getElementById("category").value;
    const apiurl = `https://api.unsplash.com/search/photos?query=${category}&client_id=o0ye8cglah3odo_9IjrPFizRSSeljqUIAK0wROd5obk`;

    const response = await fetch(apiurl);
    const data = await response.json();
    const photo = data.results[0];

    try {
      document.getElementById("image").src = photo.urls.small;
      document.getElementById(
        "author"
      ).textContent = `Author : ${photo.user.name}`;
      document.getElementById(
        "url"
      ).innerHTML = `URL : <a href="${photo.links.html}" target="_blank">${photo.links.html}</a>`;
      document.getElementById("description").innerText = `Description : ${
        photo.description || "N/A"
      }`;
    } catch (error) {
      console.error("error fecthing the image:", error);
    }
  };
});
