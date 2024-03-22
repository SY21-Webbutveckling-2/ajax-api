let swishQr = document.getElementById('swish-qr');
let swishForm = document.getElementById('swish-form');

swishForm.addEventListener('submit', async function(event) {
	event.preventDefault();

	let data = new FormData(swishForm);

	let reqBody = {
		"format": "png",
		"size": 500,
		"payee": {
			"value": "900 22 96",
			"editable": false
		},
		"amount": {
			"value": data.get('amount'),
			"editable": false
		},
		"message": {
			"value": data.get('message'),
			"editable": false
		}
	};

	let response = await fetch('https://swishproxy.up.railway.app/qrg-swish/api/v1/prefilled', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reqBody)
	});

	let blob = await response.blob();
	let url = URL.createObjectURL(blob);
	swishQr.src = url;
});