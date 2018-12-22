var AUTHENTICATED = "authenticated";

var authentication = {
    authenticate: function () {
        window.localStorage.setItem(AUTHENTICATED, "true");
    },
    isAuthenticated: function () {
        return window.localStorage.getItem(AUTHENTICATED) === "true";
    },
    logout: function () {
        window.localStorage.removeItem(AUTHENTICATED);
    }
};
