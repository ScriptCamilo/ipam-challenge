export const ERROR = 'ERROR';

export const setErrorAction = (payload: string) => ({
  type: ERROR,
  payload,
});
