module app {
    export function parseQueryString(querystring: string) {
        if (querystring.indexOf('?') === 0) {
            querystring = querystring.substring(1);
        }
        var vars = querystring.split("&");
        var result: { [key: string]: any } = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof result[pair[0]] === "undefined") {
                result[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof result[pair[0]] === "string") {
                var arr = [result[pair[0]], decodeURIComponent(pair[1])];
                result[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                result[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return result;
    }
}