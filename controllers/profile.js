const handleProfile = (req, res, db) => {
	const {id} = req.params;
	let found = false;
	db('users').select('*').from('users').where({id: id})
	.then(user => {
		if(user.length) {
			res.json(user[0]);
		} else {
			res.status(400).json('Not found');
		}
	})
	.catch(err => res.status(404).json('error'));
}

module.exports = {
	handleProfile: handleProfile
}