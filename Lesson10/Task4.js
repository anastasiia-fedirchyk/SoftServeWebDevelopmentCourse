// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

let server = {
    data: 0,

    //old
    // convertToString: function (callback) {
    //     callback((function () {
    //         return this.data + "";
    //     }).bind(this));
    // }
    convertToString: function (callback) {
        callback(() => this.data + ""
        );
    }
}

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },

    //old
    // notification: function () {
    //     return (function (callback) {
    //         this.result = callback();
    //     }).bind(this);
    // }
    notification: function () {
        return ((callback) => {
            this.result = callback();
        });
    }

};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"