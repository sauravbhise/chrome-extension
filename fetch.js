export const fetchResponse = async (question) => {
	try {
		const response = await fetch("http://localhost:3000/question", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ question })
		});

		if (!response.ok) {
			const errorResponse = {
				error: true,
				status: response.status,
				message: 'Network response was not ok'
			};
			return errorResponse;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log('An error occurred:', error);

		const errorResponse = {
			error: true,
			message: 'An error occurred while processing the request'
		};
		return errorResponse;
	}
}
