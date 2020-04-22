const clearAuthData = () => localStorage.removeItem('token');

const setAuthData = (tokenData) => localStorage.setItem('token', JSON.stringify({
  token: tokenData.token,
  createdAt: new Date().getTime(),
  userId: tokenData.uid,
}));

const getAuthData = () => localStorage.getItem('token');

export {
  clearAuthData,
  setAuthData,
  getAuthData,
};
