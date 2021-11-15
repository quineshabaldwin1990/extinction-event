const strikeThroughItems = document.querySelectorAll("ol li"),
    strikeThroughFunction = function(elem) {
        elem.target.style.textDecoration = "line-through"
    };

for (const elem of strikeThroughItems)
    elem.addEventListener("click", strikeThroughFunction);


const fadeAwayItems = document.querySelectorAll("ul li"),
    fadeFunction = function(elem) {
        elem.target.style.opacity = 0
    };

for (const elem of fadeAwayItems)
    elem.addEventListener("click", fadeFunction);


const collapseItems = document.querySelectorAll("#row img"),
    collapseFunction = function(elem) {
        elem.target.style.width = "0px"
    };

for (const elem of collapseItems)
    elem.addEventListener("click", collapseFunction);


const meteorButton = document.querySelector("#destroy-all"),
    destroyEverythingAtOnce = function() {
        for (const elem of strikeThroughItems)
            elem.style.textDecoration = "line-through";
        for (const elem of fadeAwayItems)
            elem.style.opacity = 0;
        for (const elem of collapseItems)
            elem.style.width = "0px"
    };

meteorButton.addEventListener("click", destroyEverythingAtOnce);