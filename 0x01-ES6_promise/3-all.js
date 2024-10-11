/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try{const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user]).then((userDetails) => {
    const [userPhoto, userName] = userDetails;
    console.log(`${userPhoto.body} ${userName.firstName}, ${userName.lastName}`);
  })}
    catch{ () => { console.log('Signup system offline'); } };
}
