import { fetchResponse } from './fetch.js'

document.addEventListener("DOMContentLoaded", function () {
	const submitButton = document.getElementById("submit");
	const questionInput = document.getElementById("question");
	const responseDiv = document.getElementById("response");

	submitButton.addEventListener("click", async () => {
		const question = questionInput.value;

		try {
			const response = await fetchResponse(question);
			const answer = response.answer;

			if (!answer) {
				throw new Error()
			}

			responseDiv.innerHTML = `<h2>Answer:</h2>
                               <p>${answer}</p>`;
		} catch (error) {
			console.log("An error occurred:", error);

			responseDiv.innerHTML = `<p>Error: Unable to connect to the ChatGPT API.</p>`;
		}
	});
});
