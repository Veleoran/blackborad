const mongoose = require('mongoose');

const emissionSchema = mongoose.Schema({
	name: String,
	mainAnimator: String,
	nbAnimators: Number,
	discontinued: Boolean,
});

const Emission = mongoose.model('emissions', emissionSchema);

module.exports = Emission;
