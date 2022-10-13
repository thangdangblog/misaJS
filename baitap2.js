/**
 * Yêu cầu:
 * +++ Giữ nguyên cấu trúc gọi Fetch Data
 */

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("get-post").onclick = handleGetPost;

});


function handleGetPost() {
    console.log("Xử lý lấy dữ liệu ở đây");
    // Xử lý lấy bài viết ở đây
    getUser((idUser) => {
        getListPost(idUser, (idPost) => {
            getDetailPost(idPost);
        })
    })
}

/**
 * Bước 1: Lấy thông tin user
 */
function getUser(callback) {
    fetch('https://thangdangblog.com/wp-json/wp/v2/users')
        .then((response) => response.json())
        .then((data) => {
            const idUser = data[0].id;
            console.log(idUser)
            callback(idUser);
        });
}

/**
 * Bước 2: Lấy thông tin các bài viết theo user và random 1 bài viết
 * @param {*} idAuthor 
 */
function getListPost(idAuthor, callback) {
    fetch(`https://thangdangblog.com/wp-json/wp/v2/posts?author=${idAuthor}`)
        .then((response) => response.json())
        .then((data) => {
            const indexRandom = randomInt(0, 10);
            const idPost = data[indexRandom].id;
            callback(idPost);
            console.log(idPost)
        });
}

/**
 * Lấy thông tin chi tiết post theo con số đã random ở bước 2
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
    document.querySelector(".link a").setAttribute("href", post.link);
    document.querySelector(".link a").innerHTML = "Link bài viết";
}

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}