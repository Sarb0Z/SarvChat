export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
	}, {
		id: 'u2',
		name: 'Elon Musk',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
	}],
	messages: [{
		id: 'm1',
		content: 'Sex sex sex',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'Banker alliance is on out tracks over out',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm4',
		content: 'Good good good. Prepare for the thingie thong the spider man.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'How is your mother doing?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'going to the Moooooon',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm7',
		content: 'btw, we are interested in having sex incel!',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}]
}

