const cowin = {
	baseURL: 'https://cdn-api.co-vin.in/api/',
	version: 'v2',
	endpoint: {
		states: '/admin/location/states',
		distrits: '/admin/location/distrits/',
		findByPin: '/appointment/sessions/public/findByPin',
		findByDistrict: '/appointment/sessions/public/findByDistrict',
		findByLatLong: '/appointment/sessions/public/findByLatLong',
		calendarByPin: 'appointment/sessions/public/calendarByPin',
		calendarByDistrict: 'appointment/sessions/public/calendarByDistrict',
	}
};

export default cowin;