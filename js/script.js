/*

<li><a href="https://youtube.com">YouTube</a></li>
<li><a href="https://elgiganten.se">Elgiganten</a></li>
<li><a href="https://hm.se">H&M</a></li>

*/

let linksUl = document.getElementById('links');

function populateList() {
	let xhr = new XMLHttpRequest();

	xhr.onload = function() {
		let json = JSON.parse(xhr.responseText);

		for (let i = 0; i < json.links.length; i++) {
			let linkObj = json.links[i];

			let li = document.createElement('li');

			let a = document.createElement('a');
			a.href = linkObj.url;
			a.innerText = linkObj.text;

			li.append(a);

			linksUl.append(li);
		}
	};

	xhr.open('GET', 'files/links.json');
	xhr.send();
}


populateList();