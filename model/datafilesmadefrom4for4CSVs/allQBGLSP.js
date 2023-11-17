const allQBGLSP = [
	{
		"\"\"": "\"1\"",
		"\"Player\"": "\"Josh Allen\"",
		"\"Opponent\"": "\"NYJ\"",
		"\"AVG\"": "25.4",
		"\"25th\"": "18.4",
		"\"50th\"": "24",
		"\"75th\"": "32.3",
		"\"<5\"": "0",
		"\"5 to 10\"": "0.02",
		"\"10 to 15\"": "0.1",
		"\"15 to 20\"": "0.2",
		"\"20 to 25\"": "0.2",
		"\">25\"": "0.48"
	},
	{
		"\"\"": "\"2\"",
		"\"Player\"": "\"CJ Stroud\"",
		"\"Opponent\"": "\"ARI\"",
		"\"AVG\"": "22.5",
		"\"25th\"": "18.1",
		"\"50th\"": "21.3",
		"\"75th\"": "27.6",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.02",
		"\"10 to 15\"": "0.06",
		"\"15 to 20\"": "0.24",
		"\"20 to 25\"": "0.26",
		"\">25\"": "0.38"
	},
	{
		"\"\"": "\"3\"",
		"\"Player\"": "\"Dak Prescott\"",
		"\"Opponent\"": "\"CAR\"",
		"\"AVG\"": "21.5",
		"\"25th\"": "15.9",
		"\"50th\"": "20.6",
		"\"75th\"": "27.5",
		"\"<5\"": "0",
		"\"5 to 10\"": "0.04",
		"\"10 to 15\"": "0.18",
		"\"15 to 20\"": "0.22",
		"\"20 to 25\"": "0.28",
		"\">25\"": "0.28"
	},
	{
		"\"\"": "\"4\"",
		"\"Player\"": "\"Jalen Hurts\"",
		"\"Opponent\"": "\"KC\"",
		"\"AVG\"": "20.7",
		"\"25th\"": "16.2",
		"\"50th\"": "20.9",
		"\"75th\"": "25.1",
		"\"<5\"": "0",
		"\"5 to 10\"": "0.02",
		"\"10 to 15\"": "0.22",
		"\"15 to 20\"": "0.2",
		"\"20 to 25\"": "0.3",
		"\">25\"": "0.26"
	},
	{
		"\"\"": "\"5\"",
		"\"Player\"": "\"Brock Purdy\"",
		"\"Opponent\"": "\"TB\"",
		"\"AVG\"": "20.5",
		"\"25th\"": "16.6",
		"\"50th\"": "19.4",
		"\"75th\"": "25.9",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.02",
		"\"10 to 15\"": "0.16",
		"\"15 to 20\"": "0.31",
		"\"20 to 25\"": "0.22",
		"\">25\"": "0.27"
	},
	{
		"\"\"": "\"6\"",
		"\"Player\"": "\"Kyler Murray\"",
		"\"Opponent\"": "\"HOU\"",
		"\"AVG\"": "20.5",
		"\"25th\"": "15",
		"\"50th\"": "18.9",
		"\"75th\"": "26.5",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.08",
		"\"10 to 15\"": "0.16",
		"\"15 to 20\"": "0.26",
		"\"20 to 25\"": "0.16",
		"\">25\"": "0.32"
	},
	{
		"\"\"": "\"7\"",
		"\"Player\"": "\"Justin Herbert\"",
		"\"Opponent\"": "\"GB\"",
		"\"AVG\"": "20.4",
		"\"25th\"": "15.9",
		"\"50th\"": "19",
		"\"75th\"": "24.3",
		"\"<5\"": "0",
		"\"5 to 10\"": "0.06",
		"\"10 to 15\"": "0.18",
		"\"15 to 20\"": "0.34",
		"\"20 to 25\"": "0.2",
		"\">25\"": "0.22"
	},
	{
		"\"\"": "\"8\"",
		"\"Player\"": "\"Justin Fields\"",
		"\"Opponent\"": "\"DET\"",
		"\"AVG\"": "20",
		"\"25th\"": "15.3",
		"\"50th\"": "18.6",
		"\"75th\"": "24.2",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.06",
		"\"10 to 15\"": "0.16",
		"\"15 to 20\"": "0.33",
		"\"20 to 25\"": "0.2",
		"\">25\"": "0.22"
	},
	{
		"\"\"": "\"9\"",
		"\"Player\"": "\"Lamar Jackson\"",
		"\"Opponent\"": "\"CIN\"",
		"\"AVG\"": "18.5",
		"\"25th\"": "13.3",
		"\"50th\"": "17.5",
		"\"75th\"": "23.8",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.06",
		"\"10 to 15\"": "0.26",
		"\"15 to 20\"": "0.24",
		"\"20 to 25\"": "0.18",
		"\">25\"": "0.24"
	},
	{
		"\"\"": "\"10\"",
		"\"Player\"": "\"Joe Burrow\"",
		"\"Opponent\"": "\"BAL\"",
		"\"AVG\"": "18.2",
		"\"25th\"": "14.5",
		"\"50th\"": "19.1",
		"\"75th\"": "22.1",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.1",
		"\"10 to 15\"": "0.14",
		"\"15 to 20\"": "0.32",
		"\"20 to 25\"": "0.34",
		"\">25\"": "0.08"
	},
	{
		"\"\"": "\"11\"",
		"\"Player\"": "\"Tua Tagovailoa\"",
		"\"Opponent\"": "\"LV\"",
		"\"AVG\"": "17.6",
		"\"25th\"": "14.9",
		"\"50th\"": "18.4",
		"\"75th\"": "21.3",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.08",
		"\"10 to 15\"": "0.16",
		"\"15 to 20\"": "0.4",
		"\"20 to 25\"": "0.26",
		"\">25\"": "0.08"
	},
	{
		"\"\"": "\"12\"",
		"\"Player\"": "\"Sam Howell\"",
		"\"Opponent\"": "\"NYG\"",
		"\"AVG\"": "17.6",
		"\"25th\"": "13.5",
		"\"50th\"": "18.6",
		"\"75th\"": "21.8",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.14",
		"\"10 to 15\"": "0.16",
		"\"15 to 20\"": "0.3",
		"\"20 to 25\"": "0.28",
		"\">25\"": "0.1"
	},
	{
		"\"\"": "\"13\"",
		"\"Player\"": "\"Russell Wilson\"",
		"\"Opponent\"": "\"MIN\"",
		"\"AVG\"": "17.5",
		"\"25th\"": "12.8",
		"\"50th\"": "18.6",
		"\"75th\"": "22.4",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.1",
		"\"10 to 15\"": "0.19",
		"\"15 to 20\"": "0.27",
		"\"20 to 25\"": "0.29",
		"\">25\"": "0.1"
	},
	{
		"\"\"": "\"14\"",
		"\"Player\"": "\"Jordan Love\"",
		"\"Opponent\"": "\"LAC\"",
		"\"AVG\"": "16.9",
		"\"25th\"": "12.6",
		"\"50th\"": "14.9",
		"\"75th\"": "20.8",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.08",
		"\"10 to 15\"": "0.41",
		"\"15 to 20\"": "0.18",
		"\"20 to 25\"": "0.16",
		"\">25\"": "0.14"
	},
	{
		"\"\"": "\"15\"",
		"\"Player\"": "\"Patrick Mahomes\"",
		"\"Opponent\"": "\"PHI\"",
		"\"AVG\"": "16.1",
		"\"25th\"": "11.5",
		"\"50th\"": "16.3",
		"\"75th\"": "19.4",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.1",
		"\"10 to 15\"": "0.3",
		"\"15 to 20\"": "0.36",
		"\"20 to 25\"": "0.14",
		"\">25\"": "0.08"
	},
	{
		"\"\"": "\"16\"",
		"\"Player\"": "\"Will Levis\"",
		"\"Opponent\"": "\"JAC\"",
		"\"AVG\"": "16.1",
		"\"25th\"": "12.6",
		"\"50th\"": "17",
		"\"75th\"": "19.6",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.11",
		"\"10 to 15\"": "0.21",
		"\"15 to 20\"": "0.43",
		"\"20 to 25\"": "0.15",
		"\">25\"": "0.06"
	},
	{
		"\"\"": "\"17\"",
		"\"Player\"": "\"Geno Smith\"",
		"\"Opponent\"": "\"LAR\"",
		"\"AVG\"": "16.1",
		"\"25th\"": "13.2",
		"\"50th\"": "16.9",
		"\"75th\"": "19.4",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.08",
		"\"10 to 15\"": "0.25",
		"\"15 to 20\"": "0.46",
		"\"20 to 25\"": "0.1",
		"\">25\"": "0.06"
	},
	{
		"\"\"": "\"18\"",
		"\"Player\"": "\"Matthew Stafford\"",
		"\"Opponent\"": "\"SEA\"",
		"\"AVG\"": "16",
		"\"25th\"": "13.4",
		"\"50th\"": "17.3",
		"\"75th\"": "19.9",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.15",
		"\"10 to 15\"": "0.2",
		"\"15 to 20\"": "0.37",
		"\"20 to 25\"": "0.2",
		"\">25\"": "0.04"
	},
	{
		"\"\"": "\"19\"",
		"\"Player\"": "\"Baker Mayfield\"",
		"\"Opponent\"": "\"SF\"",
		"\"AVG\"": "15.7",
		"\"25th\"": "11",
		"\"50th\"": "16.1",
		"\"75th\"": "19.3",
		"\"<5\"": "0.02",
		"\"5 to 10\"": "0.12",
		"\"10 to 15\"": "0.32",
		"\"15 to 20\"": "0.34",
		"\"20 to 25\"": "0.14",
		"\">25\"": "0.06"
	},
	{
		"\"\"": "\"20\"",
		"\"Player\"": "\"Jared Goff\"",
		"\"Opponent\"": "\"CHI\"",
		"\"AVG\"": "15.7",
		"\"25th\"": "9.7",
		"\"50th\"": "14.3",
		"\"75th\"": "20.9",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.22",
		"\"10 to 15\"": "0.26",
		"\"15 to 20\"": "0.22",
		"\"20 to 25\"": "0.12",
		"\">25\"": "0.14"
	},
	{
		"\"\"": "\"21\"",
		"\"Player\"": "\"Bryce Young\"",
		"\"Opponent\"": "\"DAL\"",
		"\"AVG\"": "14.9",
		"\"25th\"": "10.6",
		"\"50th\"": "14.9",
		"\"75th\"": "18.3",
		"\"<5\"": "0.07",
		"\"5 to 10\"": "0.13",
		"\"10 to 15\"": "0.33",
		"\"15 to 20\"": "0.3",
		"\"20 to 25\"": "0.11",
		"\">25\"": "0.07"
	},
	{
		"\"\"": "\"22\"",
		"\"Player\"": "\"Deshaun Watson\"",
		"\"Opponent\"": "\"PIT\"",
		"\"AVG\"": "14.8",
		"\"25th\"": "10.4",
		"\"50th\"": "15",
		"\"75th\"": "17.5",
		"\"<5\"": "0.04",
		"\"5 to 10\"": "0.2",
		"\"10 to 15\"": "0.26",
		"\"15 to 20\"": "0.33",
		"\"20 to 25\"": "0.13",
		"\">25\"": "0.04"
	},
	{
		"\"\"": "\"23\"",
		"\"Player\"": "\"Joshua Dobbs\"",
		"\"Opponent\"": "\"DEN\"",
		"\"AVG\"": "14.7",
		"\"25th\"": "9.3",
		"\"50th\"": "15.3",
		"\"75th\"": "18.9",
		"\"<5\"": "0.05",
		"\"5 to 10\"": "0.23",
		"\"10 to 15\"": "0.23",
		"\"15 to 20\"": "0.32",
		"\"20 to 25\"": "0.14",
		"\">25\"": "0.05"
	},
	{
		"\"\"": "\"24\"",
		"\"Player\"": "\"Tommy DeVito\"",
		"\"Opponent\"": "\"WAS\"",
		"\"AVG\"": "14.6",
		"\"25th\"": "10.2",
		"\"50th\"": "14.3",
		"\"75th\"": "18.8",
		"\"<5\"": "0.05",
		"\"5 to 10\"": "0.19",
		"\"10 to 15\"": "0.31",
		"\"15 to 20\"": "0.26",
		"\"20 to 25\"": "0.12",
		"\">25\"": "0.07"
	},
	{
		"\"\"": "\"25\"",
		"\"Player\"": "\"Tyson Bagent\"",
		"\"Opponent\"": "\"DET\"",
		"\"AVG\"": "14.5",
		"\"25th\"": "10.5",
		"\"50th\"": "14.6",
		"\"75th\"": "19.4",
		"\"<5\"": "0.06",
		"\"5 to 10\"": "0.16",
		"\"10 to 15\"": "0.35",
		"\"15 to 20\"": "0.2",
		"\"20 to 25\"": "0.18",
		"\">25\"": "0.04"
	},
	{
		"\"\"": "\"26\"",
		"\"Player\"": "\"Kenny Pickett\"",
		"\"Opponent\"": "\"CLE\"",
		"\"AVG\"": "13.8",
		"\"25th\"": "9",
		"\"50th\"": "14.2",
		"\"75th\"": "16.5",
		"\"<5\"": "0.07",
		"\"5 to 10\"": "0.21",
		"\"10 to 15\"": "0.35",
		"\"15 to 20\"": "0.26",
		"\"20 to 25\"": "0.05",
		"\">25\"": "0.07"
	},
	{
		"\"\"": "\"27\"",
		"\"Player\"": "\"Trevor Lawrence\"",
		"\"Opponent\"": "\"TEN\"",
		"\"AVG\"": "13.4",
		"\"25th\"": "8.2",
		"\"50th\"": "12.9",
		"\"75th\"": "17.2",
		"\"<5\"": "0",
		"\"5 to 10\"": "0.3",
		"\"10 to 15\"": "0.3",
		"\"15 to 20\"": "0.32",
		"\"20 to 25\"": "0.07",
		"\">25\"": "0.02"
	},
	{
		"\"\"": "\"28\"",
		"\"Player\"": "\"PJ Walker\"",
		"\"Opponent\"": "\"PIT\"",
		"\"AVG\"": "11.5",
		"\"25th\"": "6.2",
		"\"50th\"": "11",
		"\"75th\"": "15.8",
		"\"<5\"": "0.12",
		"\"5 to 10\"": "0.34",
		"\"10 to 15\"": "0.22",
		"\"15 to 20\"": "0.27",
		"\"20 to 25\"": "0.02",
		"\">25\"": "0.02"
	},
	{
		"\"\"": "\"29\"",
		"\"Player\"": "\"Zach Wilson\"",
		"\"Opponent\"": "\"BUF\"",
		"\"AVG\"": "10.8",
		"\"25th\"": "6.2",
		"\"50th\"": "10.3",
		"\"75th\"": "15.3",
		"\"<5\"": "0.15",
		"\"5 to 10\"": "0.34",
		"\"10 to 15\"": "0.22",
		"\"15 to 20\"": "0.27",
		"\"20 to 25\"": "0.02",
		"\">25\"": "0"
	},
	{
		"\"\"": "\"30\"",
		"\"Player\"": "\"Aidan O'Connell\"",
		"\"Opponent\"": "\"MIA\"",
		"\"AVG\"": "10.1",
		"\"25th\"": "7.7",
		"\"50th\"": "10.2",
		"\"75th\"": "14.1",
		"\"<5\"": "0.15",
		"\"5 to 10\"": "0.3",
		"\"10 to 15\"": "0.42",
		"\"15 to 20\"": "0.09",
		"\"20 to 25\"": "0.03",
		"\">25\"": "0"
	},

]

module.exports = allQBGLSP;