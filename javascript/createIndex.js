const indexContainer = document.getElementById("index")

const createArray = () => {
    const h2Array = document.querySelectorAll("h2, h3");
    const ul = document.createElement("ul");

    h2Array.forEach((h, index) => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.text = h.textContent;

        h.setAttribute("id",(index+1),toString());
        anchor.setAttribute("href", "#"+(index+1),toString())

        if(h.tagName === "H3") li.style.marginLeft = "24px"

        li.appendChild(anchor);
        ul.appendChild(li);
    })

    indexContainer.appendChild(ul);
}

createArray();