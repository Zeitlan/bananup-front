import appConfig from '../../app-config'

export default (object) => {
    return {
        checkLogin: async () => {
            var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
            if (cookieValue) {
                object.setState({key: cookieValue})
            }
        },
        logout: async () => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
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
                        username,
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