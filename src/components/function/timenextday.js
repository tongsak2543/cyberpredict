
// Utility function to format date as yyyy-mm-dd
function formatDateToYYYYMMDD(date) {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

// ฟังก์ชันใหม่เพื่อดึงวันถัดไป 1 วัน
export default function getNextDate() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 1); // บวกวันเพิ่ม 1 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}

// ฟังก์ชันใหม่เพื่อดึงวันถัดไปอีก 2 วัน
export function getNextDatePlusTwoDays() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 2); // บวกวันเพิ่ม 2 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}
// ฟังก์ชันใหม่เพื่อดึงวันถัดไปอีก 3 วัน
export function getNextDatePlusThreeDays() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 3); // บวกวันเพิ่ม 3 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}

// ฟังก์ชันใหม่เพื่อดึงวันถัดไปอีก 4 วัน
export function getNextDatePlusFourDays() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 4); // บวกวันเพิ่ม 4 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}

// ฟังก์ชันใหม่เพื่อดึงวันถัดไปอีก 5 วัน
export function getNextDatePlusFiveDays() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 5); // บวกวันเพิ่ม 5 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}

// ฟังก์ชันใหม่เพื่อดึงวันถัดไปอีก 6 วัน
export function getNextDatePlusSixDays() {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 6); // บวกวันเพิ่ม 6 วัน
	return formatDateToYYYYMMDD(currentDate); // ส่งกลับวันที่ในรูปแบบ yyyy-mm-dd
}
