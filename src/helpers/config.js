export const config = {
	project: {
		name: "Tech Nexus Academy",
		slogan: "Empowering Futures with Cutting-Edge Technology Education",
		description:
			"Tech Nexus Solution offers top-notch technology courses designed to equip you with the skills needed for tomorrow's tech-driven world. Join us to advance your career and stay ahead in the digital era with our expert-led training and innovative learning solutions.",
	},
	contact: {
		info: {
			phone1: {
				value: "+1(312)818 35 74",
				icon: "pi pi-phone",
				link: "tel:+13128183574",
			},
			phone2: {
				value: "+1(312)818 35 75",
				icon: "pi pi-headphones",
				link: "tel:+13128183575",
			},
			email: {
				value: "info@technexusacademy.com",
				icon: "pi pi-envelope",
				link: "mailto:info@technexusacademy.com",
			},
			address: {
				value: "1901 N Howe St, Chicago, IL 60614, USA",
				icon: "pi pi-address-book",
				link: "https://maps.app.goo.gl/Y1FcqpSmEm121asG9",
			},
		},
		website: "https://technexusacademy.com",
		map: {
			embed: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sbe!4v1721148671314!5m2!1sen!2sbe!6m8!1m7!1sKIOewExwSlrq8s9Wba0YCA!2m2!1d41.91611790502611!2d-87.64482972160637!3f88.4367077004496!4f0!5f0.7820865974627469",
		},
		socialMedia: {
			twitter: {
				url: "https://x.com",
				icon: "pi pi-twitter",
			},
			facebook: {
				url: "https://facebook.com",
				icon: "pi pi-facebook",
			},
			instagram: {
				url: "https://instagram.com",
				icon: "pi pi-instagram",
			},
			linkedin: {
				url: "https://linkedin.com",
				icon: "pi pi-linkedin",
			},
			youtube: {
				url: "https://youtube.com",
				icon: "pi pi-youtube",
			},
		},
	},
	apiURL: "https://mycampusmates.com/app",
	educationTerms: [
		{ label: "Fall", value: "FALL_SEMESTER" },
		{ label: "Spring", value: "SPRING_SEMESTER" },
	],
	genders: [
		{ label: "Female", value: "FEMALE" },
		{ label: "Male", value: "MALE" },
	],
	days: [
		{ value: "MONDAY", label: "Monday" },
		{ value: "TUESDAY", label: "Tuesday" },
		{ value: "WEDNESDAY", label: "Wednesday" },
		{ value: "THURSDAY", label: "Thursday" },
		{ value: "FRIDAY", label: "Friday" },
		{ value: "SATURDAY", label: "Saturday" },
		{ value: "SUNDAY", label: "Sunday" },
	],
	userRightsOnRoutes: [
		{
			urlRegex: /\/dashboard$/,
			roles: [
				"ADMIN",
				"MANAGER",
				"ASSISTANTMANAGER",
				"TEACHER",
				"STUDENT",
			],
		},
		{ urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/admin\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/\d+$/, roles: ["ADMIN"] },
		{
			urlRegex: /\/dashboard\/assistant-manager$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/assistant-manager\/new$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/assistant-manager\/\d+$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher\/\d+$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/lesson$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/lesson\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/education-term$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/education-term\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/program$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/program\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student\/\d+$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{ urlRegex: /\/dashboard\/student-info$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/student-info\/new$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/student-info\/\d+$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet\/new$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet\/\d+$/, roles: ["TEACHER"] },
		{
			urlRegex: /\/dashboard\/contact-message$/,
			roles: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
		},
		{ urlRegex: /\/dashboard\/choose-lesson$/, roles: ["STUDENT"] },
		{ urlRegex: /\/dashboard\/grades-meets$/, roles: ["STUDENT"] },
	],
};