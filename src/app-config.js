/*eslint no-undef: "error"*/

const appConfig = {
    apiUrl: window.RUNTIME_API_URL || 'http://127.0.0.1:8000',
}

appConfig.authUrl = `${appConfig.apiUrl}/auth`

export default appConfig
