/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  try {
    const userDetails = await Promise.all([photo, user]);
    const [userPhoto, userName] = userDetails;
    console.log(`${userPhoto.body} ${userName.firstName}, ${userName.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
    console.log(err);
  }
}
