const users = {
    body: [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "random@example.com",
            password: "password",
            subscribeId: 1,
            role: "user",
            active: true,
        },
        {
            id: 2,
            name: "Jane",
            surname: "Doe",
            email: "random2@example.com",
            password: "password",
            subscribeId: null,
            role: "user",
            active: true,
        },
    ],
    getAll: () => {
        return users.body;
    },
    getById: (id) => {
        return users.body.filter((item) => item.id == id);
    },
    save: (data) => {
        users.body.push(data);
    },
    subscribe: (id, subscribeId) => {
        users.body.forEach((item) => {
            if (item.id == id) {
                item.subscribeId = subscribeId;
            }
        });
        return users.body.filter((item) => item.id == id);
    },
    update: (id, data) => {
        users.body.forEach((item) => {
            if (item.id == id) {
                item.name = data.name;
            }
        });
        return users.body.filter((item) => item.id == id);
    },
    delete: (id) => {
        let deleted = {};
        users.body.forEach((item, index) => {
            if (item.id == id) {
                deleted = item;
                users.body.splice(index, 1);
            }
        });
        return deleted;
    },
};

module.exports = users;
