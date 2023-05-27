const AppUser = (function () {
  let instance;
  let _user = '';

  const setUser = function (user) {
    _user = user;
  };

  const getUser = function () {
    return _user;
  };

  const createInstance = function () {
    return {
      setUser: setUser,
      getUser: getUser
    };
  };

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    }
  };
})();

export default AppUser;
