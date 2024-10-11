import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const signUser = signUpUser(firstName, lastName);
  const photoUser = uploadPhoto(filename);
  const details = await Promise.allSettled([signUser, photoUser]);
  const result = [];
  details.forEach((item) => {
    if (item.status === 'fulfilled') {
      result.push({ status: item.status, value: item.value });
    } else {
      result.push({ status: item.status, value: `${item.reason}` });
    }
  });
  return result;
}
