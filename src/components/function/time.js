// Utility function to format date as yyyy-mm-dd
function formatDateToYYYYMMDD(date) {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

// Export the function instead of the formatted date
export default function formattedDate() {
	const currentDate = new Date();
	return formatDateToYYYYMMDD(currentDate); // Call the format function with the current date
}

