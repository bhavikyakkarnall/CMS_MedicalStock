export default class UsersService {
    
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getUsers() {
        let response = await fetch(this.baseUrl);
        let users = await response.json();
        return users;
    }

    async addUser(userData) {
        let response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    }
}