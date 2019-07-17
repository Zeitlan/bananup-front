import appConfig from '../../app-config'

export default (object) => {
    return {
        checkLogin: async () => {
            let access = object.actions.checkCookieAccess()
            let token = object.actions.accessCookie('token', access)
            if (token) {
                try {
                    const request = await fetch(appConfig.apiUrl + '/auth/user/', {
                        headers: {
                          'Authorization': 'Token ' + token,
                        },
                      })
                    const json = await request.json();
                    object.setState({user: json});
                    object.setState({key: token})
                } catch (error) {
                    return {
                        message: 'Erreur : ' + error.message
                    }
                }
            }
        },
        logout: async () => {
            object.actions.resetCookie('token')
            object.setState({key: undefined})
        },
        login: async (username, password) => {
            try {
                const request = await fetch(appConfig.authUrl + '/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept' : 'application/json'
                    },
                    body: JSON.stringify({
                        email: username,
                        password,
                    })
                })
                const json = await request.json()
                const status = request.status
                if (status !== 200) {
                    return json
                } else {
                    object.setState({key: json.key})
                    document.cookie = "token="+json.key
                }
            }
            catch(error) {
                return {
                    message: 'Erreur : ' + error.message
                }
            }
            return undefined
        },
    
        signup: async (username, email, password1, password2) => {
            try {
                const request = await fetch(appConfig.authUrl + '/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept' : 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password1,
                        password2,
                    })
                })
                const json = await request.json()
                const status = request.status
                if (status !== 201) {
                    return json
                } else {
                    object.setState({key: json.key})
                    document.cookie = "token="+json.key
                }
            }
            catch(error) {
                return {
                    message: 'Erreur : ' + error.message
                }
            }
            return undefined
        },    
    }
}