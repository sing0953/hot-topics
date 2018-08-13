// get the refrences
const $container = document.querySelector(".content");
const $links = document.querySelectorAll("nav a");

//object to store content
const contents = {};

//to load content on homepage
fetch("./partials/home.html")
            .then(function (fdbk) {
                return fdbk.text();
            })
            .then(function (dt_content) {
                contents["./partials/home.html"] = dt_content;
                $container.innerHTML = contents["./partials/home.html"];
            })

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function (urlFeed) {
     if (!contents[urlFeed]) {
        fetch(urlFeed)
            .then(function (fdbk) {
                return fdbk.text();
            })
            .then(function (dt_content) {
                contents[urlFeed] = dt_content;
                $container.innerHTML = contents[urlFeed];
            })
    } else {
        $container.innerHTML = contents[urlFeed];
    }
}

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = function (ev) {
    ev.preventDefault();
    let url = ev.target.href;
    loadContent(url)
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
$links[0].addEventListener("click", selectContent);
$links[1].addEventListener("click", selectContent);