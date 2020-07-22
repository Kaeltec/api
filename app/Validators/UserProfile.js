/** @type {typeof import('@adonisjs/validator/src/Validator')} */
const { rule } = use('Validator');

const BaseValidator = require('./BaseValidator');

class UserProfileValidator extends BaseValidator {
  get rules() {
    return {
      bio: [rule('min', 1), rule('max', 130)],
      favColor: [rule('regex', /^#([a-fA-F0-9]{3}){1,2}$/)],
      background: [
        rule(
          'regex',
          /^https:\/\/i\.imgur\.com\/[a-zA-Z0-9]{7}\.(png|jpg|jpeg)$/,
        ),
      ],
    };
  }

  get messages() {
    return {
      'bio.required': 'You must provide the user bio',
      'background.required': 'You must provide the user background',
      'favColor.required': 'You must provide the user favorite color',
    };
  }
}

module.exports = UserProfileValidator;
