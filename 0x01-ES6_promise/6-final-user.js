import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  // Wait for all promises to settle
  const details = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]);

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
