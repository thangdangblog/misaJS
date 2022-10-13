document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById("get-post").onclick = handleGetPost;

});


function handleGetPost() {
    console.log("Xử lý lấy dữ liệu ở đây");
    // Xử lý lấy bài viết ở đây
}


/**
 * Lấy thông tin user
 */
function getUser() {
    fetch('https://thangdangblog.com/wp-json/wp/v2/users')
        .then((response) => response.json())
        .then((data) => {
            const idUser = data[0].id;

            console.log(idUser)
        });
}

/**
 * Lấy thông tin bài viết theo user
 * @param {*} idAuthor 
 */
function getListPost(idAuthor) {
    fetch(`https://thangdangblog.com/wp-json/wp/v2/posts?author=${idAuthor}`)
        .then((response) => response.json())
        .then((data) => {
            const indexRandom = randomInt(0,10);
            const idPost = data[indexRandom].id;
            console.log(idPost)
        });
}

/**
 * Lấy thông tin chi tiết post
 * @param {*} idPost 
 */
function getDetailPost(idPost) {
    fetch(`https://thangdangblog.com/wp-json/wp/v2/posts/${idPost}`)
        .then((response) => response.json())
        .then((data) => {
            bindingPost(data);
        });
}

/**
 * Binding thông tin bài viết
 */
function bindingPost(post) {
    document.querySelector(".title").innerHTML = post.title.rendered;
    document.querySelector(".link a").setAttribute("href",post.link);
    document.querySelector(".link a").innerHTML = "Link bài viết";
}

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }