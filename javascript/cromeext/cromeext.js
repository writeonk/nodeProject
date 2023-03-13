const inputbtn = document.getElementById("save");
let myleads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete");
const leadsformlocalstorage = JSON.parse(localStorage.getItem("myleads"));
const tabbtn = document.getElementById("tab");



if (leadsformlocalstorage) {
    myleads = leadsformlocalstorage
    render(myleads)
}
function render(leads) {
    let listitems = "";
    for (let i = 0; i < leads.length; i++) {
        listitems += `<li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listitems;
}

deleteEl.addEventListener("dblclick", function () {
    localStorage.clear();
    myleads = [];
    render(myleads)

})
tabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        render(myleads);
    })


})
inputbtn.addEventListener("click", function () {
    myleads.push(inputEl.value);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    render(myleads);
    inputEl.value = ""
})






