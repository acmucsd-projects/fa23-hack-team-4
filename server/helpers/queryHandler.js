// https://erthru.medium.com/flexible-nodejs-mongoose-sorting-using-url-query-parameter-85e0378be2e7
exports.handleQuery = (query) => {
    try{
      const toJSONString = ("{" + query + "}").replace(/(\w+:)|(\w+ :)/g, (matched => {
          return '"' + matched.substring(0, matched.length - 1) + '":';
      }));

      return JSON.parse(toJSONString);
    }catch(err){
      return JSON.parse("{}"); 
    }
}