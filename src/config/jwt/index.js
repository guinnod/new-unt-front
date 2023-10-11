const setAccessToken = (accessToken) => {
    setJwtProperty("access", accessToken);
};

const setRefreshToken = (refreshToken) => {
    setJwtProperty("refresh", refreshToken);
};

const getAccessToken = () => {
    const accessToken = getJwt().access;
    return getItemOrNull(accessToken);
};

const getRefreshToken = () => {
    const refreshToken = getJwt().refresh;
    return getItemOrNull(refreshToken);
};

const saveJwt = (jwt) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
};

const setJwtProperty = (propertyName, propertyValue) => {
    const jwt = getJwt();
    jwt[propertyName] = propertyValue;
    saveJwt(jwt);
};

const getJwt = () => {
    try {
        const jwt = JSON.parse(localStorage.getItem("jwt"));
        return jwt || {};
    } catch (error) {
        return {};
    }
};

const getItemOrNull = (item) => {
    return item || null;
};

const clearJwt = () => {
    localStorage.removeItem("jwt");
};

const jwt = {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    saveJwt,
    clearJwt,
};

export default jwt;
