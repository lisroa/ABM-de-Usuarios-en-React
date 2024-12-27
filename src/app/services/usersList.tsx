import axios from "axios";

const BASE_URL = "https://staging.duxsoftware.com.ar/api/personal";

export const fetchUsers = async (
	sector: number,
	limit: number = 10,
	page: number = 1
) => {
	try {
		const response = await axios.get(BASE_URL, {
			params: {
				sector,
				_limit: limit,
				_page: page,
			},
		});

		return {
			data: response.data,
			total: parseInt(response.headers["x-total-count"], 10),
		};
	} catch (error) {
		console.error("Error al obtener los usuarios:", error);
		throw error;
	}
};
