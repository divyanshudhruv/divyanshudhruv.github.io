export function getDate() {
	const date = new Date();
	const monthName = date.toLocaleString("default", { month: "long" });
	const dayNumber = date.getDate();
	return `${monthName} ${dayNumber}`;
}
