const User = require('./user');
const Prophecy = require('./prophecy');
const UserProphecy = require('./userProphecy');


User.belongsToMany(Prophecy, {
    through: UserProphecy,
    foreignKey: 'user_id'
});


Prophecy.belongsTo(User, {
    through: UserProphecy,
    foreignKey: 'user_id',
    onDelete: 'cascade'
}); 



module.exports = { User, Prophecy, UserProphecy };


