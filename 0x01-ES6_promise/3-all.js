import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((userDetails) => {
      const [userPhoto, userName] = userDetails;
      console.log(`${userPhoto.body} ${userName.firstName}, ${userName.lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
