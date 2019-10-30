/*eslint no-undef: "error"*/
const appConfig = {
    apiUrl: window.RUNTIME_API_URL || 'https://api.beta.bananup.co',
}

appConfig.authUrl = `${appConfig.apiUrl}/auth`

export default appConfig
