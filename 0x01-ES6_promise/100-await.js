import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const awaitResult = await Promise.all([uploadPhoto(), createUser()]);
    const [photo, user] = awaitResult;
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
