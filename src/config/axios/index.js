import {
    createAxiosWithBaseUrl,
    applyJwtAuth,
    configureRefreshRetry,
} from "./helper";

const baseURL = "https://cloudmix-backend.vercel.app";

const axios = createAxiosWithBaseUrl(baseURL);

const axiosAuthorized = createAxiosWithBaseUrl(baseURL);
applyJwtAuth(axiosAuthorized);
configureRefreshRetry(axiosAuthorized);

export { axiosAuthorized, axios };
