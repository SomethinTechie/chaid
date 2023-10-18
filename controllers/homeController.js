exports.home = async (req, res) => {
	res.render("./home", { layout: "./layouts/homeLayout", title: "Chaid" });
};

exports.about = async (req, res) => {
	res.render("./about", { layout: "./layouts/homeLayout", title: "Chaid" });
};

exports.team = async (req, res) => {
	res.render("./team", { layout: "./layouts/homeLayout", title: "Chaid" });
};

exports.services = async (req, res) => {
	res.render("./services", {
		layout: "./layouts/homeLayout",
		title: "Chaid",
	});
};

exports.contact = async (req, res) => {
	res.render("./contacts", {
		layout: "./layouts/homeLayout",
		title: "Chaid",
	});
};

exports.ally = async (req, res) => {
	res.render("./ally", { layout: "./layouts/homeLayout", title: "Chaid" });
};

exports.companion = async (req, res) => {
	res.render("./companion", {
		layout: "./layouts/homeLayout",
		title: "Chaid",
	});
};

exports.prominent = async (req, res) => {
	res.render("./prominent", {
		layout: "./layouts/homeLayout",
		title: "Chaid",
	});
};

exports.academy = async (req, res) => {
	res.render("./academy", { layout: "./layouts/homeLayout", title: "Chaid" });
};

exports.supportServices = async (req, res) => {
	res.render("./support-services", {
		layout: "./layouts/homeLayout",
		title: "Support services",
	});
};

exports.operationalServices = async (req, res) => {
	res.render("./operational-services", {
		layout: "./layouts/homeLayout",
		title: "Operational services",
	});
};

exports.educationalServices = async (req, res) => {
	res.render("./educational-services", {
		layout: "./layouts/homeLayout",
		title: "Educational services",
	});
};

exports.faqs = async (req, res) => {
	res.render("./faqs", { layout: "./layouts/homeLayout", title: "FAQs" });
};

exports.application = async (req, res) => {
	res.render("./application", {
		layout: "./layouts/homeLayout",
		title: "FAQs",
	});
};

exports.investors = async (req, res) => {
	res.render("./investors", {
		layout: "./layouts/homeLayout",
		title: "Investors",
	});
};

exports.mentors = async (req, res) => {
	res.render("./mentors", {
		layout: "./layouts/homeLayout",
		title: "Mentors",
	});
};
