const datas = [];
const jsonData = fetch("search.json")
    .then(res => res.json())
    .then(data => datas.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "ig");
        return place.city.match(regex) || place.religion.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, datas);
    const innerHtml = matchArray.map(place => {
        const regex = new RegExp(this.value, "ig");
        const cityName = place.city.replace(regex, `<span class="li-span">${this.value}</span>`);
        const religionName = place.religion.replace(regex, `<span class="li-span">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${religionName}</span>
                <span class="plateCode">${place.plate.toString()}</span>
            </li>
            `;
    }).join("");
    suggestions.innerHTML = innerHtml;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);