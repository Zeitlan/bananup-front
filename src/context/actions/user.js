import appConfig from '../../app-config'

export default (object) => {
    return {
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