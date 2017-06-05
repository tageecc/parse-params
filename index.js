class Parse {
    constructor(req) {
        if (!req) throw new Error('req is undefined');

        this.req = req;
        console.log(req.url);

        this.query = this.parseQuery(req.url);
    }

    parseQuery(url) {
        if (!url) throw new Error('url is undefined');

        url = decodeURI(url);
        let params = {};
        /([^?=&]+)(=([^&]*))?/.test(url);
    }
}

module.exports = Parse;