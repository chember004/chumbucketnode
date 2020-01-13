const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (exclude port number)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abac', '123');
console.log(myUrl.searchParams);

// loop through params object
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
console.log(myUrl.searchParams);