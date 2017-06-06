const isJSON = require('is-json');
const querystring = require("querystring");
class Parse {
    constructor(req) {
        if (!req) throw new Error('req is undefined');

        this.req = req;
        this.get = this.parseGET();
        this.post = this.parsePost();
    }

    parseGET() {
        let url = decodeURI(this.req.url), params = {};
        url.replace(/([^?=&]+)=([^&]*)?/ig, (a, b, c) => {
            c = isJSON(c) ? JSON.parse(c) : c;
            params[b] = c;
        });
        return params;
    }

    async parsePost() {

        let postData = "";
        // 数据块接收中
        this.req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
        });
        // 数据接收完毕，执行回调函数
        await this.req.addListener("end", function () {
            console.log('数据接收完毕');
            let params = querystring.parse(postData);//GET & POST  ////解释表单数据部分{name="zzl",email="zzl@sina.com"}
            console.log(params);
        });
    }
}

module.exports = Parse;