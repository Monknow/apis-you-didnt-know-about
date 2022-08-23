const logDate = (locale) => {
	const newDate = new Date("2022-10-24"); // YY/MM/DD
	const dateTime = new Intl.DateTimeFormat(locale, {timeZone: "UTC"});
	const formatedDate = dateTime.format(newDate);
	console.log(formatedDate);
};

logDate("en-US"); // 10/23/2022
logDate("de-DE"); // 23.10.2022
logDate("zh-TW"); // 2022/10/23
