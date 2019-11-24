const { Model } = require('objection');

class User extends Model {
    static get tableName(){
        return 'sent_email';
    }
}

module.exports = User;