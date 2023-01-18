const allQBGLSP = [
  {
    '""': '"1"',
    '"Player"': '"Josh Allen"',
    '"AVG"': '24.2',
    '"25th"': '17.2',
    '"50th"': '22.2',
    '"75th"': '30.9',
    '"<5"': '0',
    '"5 to 10"': '0.04',
    '"10 to 15"': '0.12',
    '"15 to 20"': '0.16',
    '"20 to 25"': '0.22',
    '">25"': '0.46',
  },
  {
    '""': '"2"',
    '"Player"': '"Kyler Murray"',
    '"AVG"': '19.8',
    '"25th"': '14.3',
    '"50th"': '20.2',
    '"75th"': '24.3',
    '"<5"': '0.04',
    '"5 to 10"': '0.14',
    '"10 to 15"': '0.1',
    '"15 to 20"': '0.2',
    '"20 to 25"': '0.28',
    '">25"': '0.24',
  },
  {
    '""': '"3"',
    '"Player"': '"Lamar Jackson"',
    '"AVG"': '19.4',
    '"25th"': '14.4',
    '"50th"': '19',
    '"75th"': '22.8',
    '"<5"': '0.02',
    '"5 to 10"': '0.02',
    '"10 to 15"': '0.26',
    '"15 to 20"': '0.3',
    '"20 to 25"': '0.26',
    '">25"': '0.15',
  },
  {
    '""': '"4"',
    '"Player"': '"Jared Goff"',
    '"AVG"': '18.3',
    '"25th"': '15.2',
    '"50th"': '18.5',
    '"75th"': '21.6',
    '"<5"': '0.02',
    '"5 to 10"': '0.04',
    '"10 to 15"': '0.16',
    '"15 to 20"': '0.4',
    '"20 to 25"': '0.26',
    '">25"': '0.12',
  },
  {
    '""': '"5"',
    '"Player"': '"Marcus Mariota"',
    '"AVG"': '18.2',
    '"25th"': '12.7',
    '"50th"': '17.4',
    '"75th"': '22.5',
    '"<5"': '0',
    '"5 to 10"': '0.12',
    '"10 to 15"': '0.3',
    '"15 to 20"': '0.18',
    '"20 to 25"': '0.16',
    '">25"': '0.24',
  },
  {
    '""': '"6"',
    '"Player"': '"Carson Wentz"',
    '"AVG"': '18.1',
    '"25th"': '14.9',
    '"50th"': '18.4',
    '"75th"': '22.4',
    '"<5"': '0.02',
    '"5 to 10"': '0.08',
    '"10 to 15"': '0.18',
    '"15 to 20"': '0.34',
    '"20 to 25"': '0.24',
    '">25"': '0.14',
  },
  {
    '""': '"7"',
    '"Player"': '"Joe Burrow"',
    '"AVG"': '18.1',
    '"25th"': '14',
    '"50th"': '18.5',
    '"75th"': '22.3',
    '"<5"': '0.02',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.14',
    '"15 to 20"': '0.32',
    '"20 to 25"': '0.32',
    '">25"': '0.1',
  },
  {
    '""': '"8"',
    '"Player"': '"Geno Smith"',
    '"AVG"': '18',
    '"25th"': '13.5',
    '"50th"': '18.3',
    '"75th"': '21.7',
    '"<5"': '0.02',
    '"5 to 10"': '0.12',
    '"10 to 15"': '0.18',
    '"15 to 20"': '0.31',
    '"20 to 25"': '0.2',
    '">25"': '0.16',
  },
  {
    '""': '"9"',
    '"Player"': '"Kirk Cousins"',
    '"AVG"': '18',
    '"25th"': '15',
    '"50th"': '18.2',
    '"75th"': '21.5',
    '"<5"': '0',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.16',
    '"15 to 20"': '0.42',
    '"20 to 25"': '0.2',
    '">25"': '0.12',
  },
  {
    '""': '"10"',
    '"Player"': '"Patrick Mahomes"',
    '"AVG"': '17.8',
    '"25th"': '14.9',
    '"50th"': '18.5',
    '"75th"': '21.6',
    '"<5"': '0.02',
    '"5 to 10"': '0.08',
    '"10 to 15"': '0.16',
    '"15 to 20"': '0.32',
    '"20 to 25"': '0.34',
    '">25"': '0.08',
  },
  {
    '""': '"11"',
    '"Player"': '"Jimmy Garoppolo"',
    '"AVG"': '17.7',
    '"25th"': '12.6',
    '"50th"': '18.4',
    '"75th"': '22.9',
    '"<5"': '0.04',
    '"5 to 10"': '0.08',
    '"10 to 15"': '0.24',
    '"15 to 20"': '0.2',
    '"20 to 25"': '0.29',
    '">25"': '0.14',
  },
  {
    '""': '"12"',
    '"Player"': '"Derek Carr"',
    '"AVG"': '17.5',
    '"25th"': '14.6',
    '"50th"': '18.1',
    '"75th"': '20.9',
    '"<5"': '0',
    '"5 to 10"': '0.14',
    '"10 to 15"': '0.14',
    '"15 to 20"': '0.41',
    '"20 to 25"': '0.18',
    '">25"': '0.12',
  },
  {
    '""': '"13"',
    '"Player"': '"Aaron Rodgers"',
    '"AVG"': '17.5',
    '"25th"': '11.9',
    '"50th"': '17',
    '"75th"': '22.6',
    '"<5"': '0',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.25',
    '"15 to 20"': '0.29',
    '"20 to 25"': '0.21',
    '">25"': '0.15',
  },
  {
    '""': '"14"',
    '"Player"': '"Russell Wilson"',
    '"AVG"': '17.4',
    '"25th"': '11.8',
    '"50th"': '17',
    '"75th"': '22.7',
    '"<5"': '0.02',
    '"5 to 10"': '0.15',
    '"10 to 15"': '0.27',
    '"15 to 20"': '0.19',
    '"20 to 25"': '0.17',
    '">25"': '0.21',
  },
  {
    '""': '"15"',
    '"Player"': '"Mac Jones"',
    '"AVG"': '17.1',
    '"25th"': '12.7',
    '"50th"': '16.4',
    '"75th"': '20.8',
    '"<5"': '0.02',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.33',
    '"15 to 20"': '0.27',
    '"20 to 25"': '0.14',
    '">25"': '0.14',
  },
  {
    '""': '"16"',
    '"Player"': '"Mitchell Trubisky"',
    '"AVG"': '17',
    '"25th"': '12.7',
    '"50th"': '16.3',
    '"75th"': '21.4',
    '"<5"': '0.04',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.31',
    '"15 to 20"': '0.2',
    '"20 to 25"': '0.18',
    '">25"': '0.16',
  },
  {
    '""': '"17"',
    '"Player"': '"Jameis Winston"',
    '"AVG"': '17',
    '"25th"': '12.4',
    '"50th"': '17.7',
    '"75th"': '22.1',
    '"<5"': '0.04',
    '"5 to 10"': '0.12',
    '"10 to 15"': '0.2',
    '"15 to 20"': '0.28',
    '"20 to 25"': '0.26',
    '">25"': '0.1',
  },
  {
    '""': '"18"',
    '"Player"': '"Zach Wilson"',
    '"AVG"': '17',
    '"25th"': '12.5',
    '"50th"': '17',
    '"75th"': '21.3',
    '"<5"': '0.06',
    '"5 to 10"': '0.12',
    '"10 to 15"': '0.22',
    '"15 to 20"': '0.24',
    '"20 to 25"': '0.18',
    '">25"': '0.18',
  },
  {
    '""': '"19"',
    '"Player"': '"Justin Fields"',
    '"AVG"': '16.9',
    '"25th"': '12.5',
    '"50th"': '15.8',
    '"75th"': '22',
    '"<5"': '0.06',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.3',
    '"15 to 20"': '0.16',
    '"20 to 25"': '0.2',
    '">25"': '0.18',
  },
  {
    '""': '"20"',
    '"Player"': '"Justin Herbert"',
    '"AVG"': '16.8',
    '"25th"': '12.5',
    '"50th"': '17.3',
    '"75th"': '21.3',
    '"<5"': '0.04',
    '"5 to 10"': '0.12',
    '"10 to 15"': '0.16',
    '"15 to 20"': '0.34',
    '"20 to 25"': '0.24',
    '">25"': '0.1',
  },
  {
    '""': '"21"',
    '"Player"': '"Ryan Tannehill"',
    '"AVG"': '16.8',
    '"25th"': '11.9',
    '"50th"': '16.3',
    '"75th"': '23.9',
    '"<5"': '0.06',
    '"5 to 10"': '0.14',
    '"10 to 15"': '0.24',
    '"15 to 20"': '0.2',
    '"20 to 25"': '0.16',
    '">25"': '0.18',
  },
  {
    '""': '"22"',
    '"Player"': '"Cooper Rush"',
    '"AVG"': '16.6',
    '"25th"': '12',
    '"50th"': '16.2',
    '"75th"': '20.2',
    '"<5"': '0.02',
    '"5 to 10"': '0.1',
    '"10 to 15"': '0.22',
    '"15 to 20"': '0.4',
    '"20 to 25"': '0.18',
    '">25"': '0.08',
  },
  {
    '""': '"23"',
    '"Player"': '"Tom Brady"',
    '"AVG"': '16.5',
    '"25th"': '12',
    '"50th"': '16.6',
    '"75th"': '21.3',
    '"<5"': '0.06',
    '"5 to 10"': '0.08',
    '"10 to 15"': '0.22',
    '"15 to 20"': '0.32',
    '"20 to 25"': '0.24',
    '">25"': '0.08',
  },
  {
    '""': '"24"',
    '"Player"': '"Jalen Hurts"',
    '"AVG"': '16',
    '"25th"': '10.2',
    '"50th"': '16.7',
    '"75th"': '19.5',
    '"<5"': '0.04',
    '"5 to 10"': '0.21',
    '"10 to 15"': '0.17',
    '"15 to 20"': '0.38',
    '"20 to 25"': '0.15',
    '">25"': '0.06',
  },
  {
    '""': '"25"',
    '"Player"': '"Matthew Stafford"',
    '"AVG"': '15.9',
    '"25th"': '10.9',
    '"50th"': '15.3',
    '"75th"': '20.5',
    '"<5"': '0',
    '"5 to 10"': '0.16',
    '"10 to 15"': '0.31',
    '"15 to 20"': '0.27',
    '"20 to 25"': '0.18',
    '">25"': '0.09',
  },
  {
    '""': '"26"',
    '"Player"': '"Davis Mills"',
    '"AVG"': '15.8',
    '"25th"': '12.5',
    '"50th"': '16',
    '"75th"': '20',
    '"<5"': '0.09',
    '"5 to 10"': '0.06',
    '"10 to 15"': '0.23',
    '"15 to 20"': '0.36',
    '"20 to 25"': '0.19',
    '">25"': '0.06',
  },
  {
    '""': '"27"',
    '"Player"': '"Andy Dalton"',
    '"AVG"': '15.2',
    '"25th"': '11.3',
    '"50th"': '15.3',
    '"75th"': '18.4',
    '"<5"': '0.06',
    '"5 to 10"': '0.11',
    '"10 to 15"': '0.3',
    '"15 to 20"': '0.4',
    '"20 to 25"': '0.04',
    '">25"': '0.09',
  },
  {
    '""': '"28"',
    '"Player"': '"Jacoby Brissett"',
    '"AVG"': '15',
    '"25th"': '10.2',
    '"50th"': '13.5',
    '"75th"': '19.3',
    '"<5"': '0.04',
    '"5 to 10"': '0.22',
    '"10 to 15"': '0.28',
    '"15 to 20"': '0.24',
    '"20 to 25"': '0.1',
    '">25"': '0.12',
  },
  {
    '""': '"29"',
    '"Player"': '"Trevor Lawrence"',
    '"AVG"': '15',
    '"25th"': '10.9',
    '"50th"': '15.1',
    '"75th"': '18.5',
    '"<5"': '0.02',
    '"5 to 10"': '0.15',
    '"10 to 15"': '0.33',
    '"15 to 20"': '0.33',
    '"20 to 25"': '0.13',
    '">25"': '0.04',
  },
  {
    '""': '"30"',
    '"Player"': '"Baker Mayfield"',
    '"AVG"': '14.6',
    '"25th"': '9.8',
    '"50th"': '15',
    '"75th"': '18.6',
    '"<5"': '0.04',
    '"5 to 10"': '0.22',
    '"10 to 15"': '0.24',
    '"15 to 20"': '0.29',
    '"20 to 25"': '0.16',
    '">25"': '0.04',
  },
  {
    '""': '"31"',
    '"Player"': '"Daniel Jones"',
    '"AVG"': '14.3',
    '"25th"': '9',
    '"50th"': '13.6',
    '"75th"': '17.8',
    '"<5"': '0.1',
    '"5 to 10"': '0.19',
    '"10 to 15"': '0.31',
    '"15 to 20"': '0.21',
    '"20 to 25"': '0.1',
    '">25"': '0.1',
  },
  {
    '""': '"32"',
    '"Player"': '"Matt Ryan"',
    '"AVG"': '13.4',
    '"25th"': '9.2',
    '"50th"': '12.3',
    '"75th"': '17.2',
    '"<5"': '0.04',
    '"5 to 10"': '0.27',
    '"10 to 15"': '0.29',
    '"15 to 20"': '0.29',
    '"20 to 25"': '0.07',
    '">25"': '0.04',
  },
  {
    '""': '"33"',
    '"Player"': '"Teddy Bridgewater"',
    '"AVG"': '12.4',
    '"25th"': '6.6',
    '"50th"': '12.1',
    '"75th"': '16.8',
    '"<5"': '0.13',
    '"5 to 10"': '0.33',
    '"10 to 15"': '0.25',
    '"15 to 20"': '0.13',
    '"20 to 25"': '0.1',
    '">25"': '0.08',
  },
];

module.exports = allQBGLSP;