exports.home = async (req,res) => {
	res.render('./home', { layout: './layouts/homeLayout', title: 'The Bulb World' })
}

exports.about = async (req,res) => {
	res.render('./about', { layout: './layouts/homeLayout', title: 'The Bulb World' })
}

exports.team = async (req,res) => {
	res.render('./team', { layout: './layouts/homeLayout', title: 'The Bulb World' })
}

exports.services = async (req,res) => {
	res.render('./services', { layout: './layouts/homeLayout', title: 'The Bulb World' })
}

exports.contact = async (req,res) => {
	res.render('./contacts', { layout: './layouts/homeLayout', title: 'The Bulb World' })
}