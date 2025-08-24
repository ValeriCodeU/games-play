export const buildUrlPath = (path, params) => {
    const url = Object.keys(params).reduce((result, param) => {
        return result.replace(`:${param}`, encodeURIComponent(params[param]));
    }, path);

    return url;
}