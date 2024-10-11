import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
        const userDetails = await Promise.all([uploadPhoto(), createUser()]);
        const [userPhoto, userName] = userDetails;
        console.log(`${userPhoto.body} ${userName.firstName}, ${userName.lastName}`);
    } catch {
        console.log('Signup system offline');
    }
}
