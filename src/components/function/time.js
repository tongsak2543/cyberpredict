// Utility function to format date as yyyy-mm-dd
function formatDateToYYYYMMDD(date) {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

// Get the current date
const currentDate = new Date();
const formattedDate = formatDateToYYYYMMDD(currentDate);


// console.log({formattedDate});

// Export the formatted date if needed
export default formattedDate;
