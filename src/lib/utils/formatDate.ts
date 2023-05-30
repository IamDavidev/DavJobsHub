export function formatDate(date: Date) {
	const now = new Date()
	const diff = Math.abs(now - date)

	const minute = 60 * 1000
	const hour = 60 * minute
	const day = 24 * hour
	const week = 7 * day

	const minutes = Math.floor(diff / minute)
	const hours = Math.floor(diff / hour)
	const days = Math.floor(diff / day)
	const weeks = Math.floor(diff / week)

	if (diff < minute) {
		return `${minutes} minutes ago`
	} else if (diff < hour) {
		return `${hours} hours ago`
	} else if (diff < day) {
		return `${days} days ago`
	} else if (diff < week) {
		return `${weeks} weeks ago`
	} else if (isYesterday(date)) {
		return 'Yesterday'
	} else if (isSameWeek(date, now)) {
		return formatDateToWeekday(date)
	} else {
		return formatDateToDefault(date)
	}
}

export function isYesterday(date) {
	const today = new Date()
	const yesterday = new Date(today)
	yesterday.setDate(today.getDate() - 1)

	return (
		date.getDate() === yesterday.getDate() &&
		date.getMonth() === yesterday.getMonth() &&
		date.getFullYear() === yesterday.getFullYear()
	)
}

export function isSameWeek(date1, date2) {
	const diff = Math.abs(date1 - date2)
	const day = 24 * 60 * 60 * 1000
	const diffDays = Math.floor(diff / day)
	const diffWeeks = Math.floor(diffDays / 7)

	return diffWeeks === 0 && date1.getDay() >= date2.getDay()
}

export function formatDateToWeekday(date) {
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	return weekdays[date.getDay()]
}

export function formatDateToDefault(date) {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return date.toLocaleDateString('en-EN', options)
}