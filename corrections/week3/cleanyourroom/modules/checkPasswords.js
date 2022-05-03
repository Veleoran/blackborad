function checkModeratorPassword(password) {
	return password === 'modpwd123';
}

function checkAdminPassword(password) {
	return password === 'adminazerty123';
}

module.exports = { checkModeratorPassword, checkAdminPassword };
