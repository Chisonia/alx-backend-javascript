import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser () {
  try {
    const result_3 = await Promise.all([uploadPhoto(), createUser()]);
    const [ photo, user ]  = result_3;
    return {
        photo: photo,
        user: user
    };
  } catch (error) {
    return {
        photo: null,
        user: null
    };
  }
}
