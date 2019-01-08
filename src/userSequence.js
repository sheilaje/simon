import { User } from './user';

export function userSequence(color) {
  var newUser = new User(color);
  console.log(newUser.sequence);
}
