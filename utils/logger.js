// 🔄 Refactoro the Changer  
// Przenieś teraz odpowiednie wywołania logów z routing.js i zastąp tam logowanie bezpośrednie wywołaniem tych funkcji.

const getInfoLog = (req) => {
  const {url, method } = req;
  console.log(
    `INFO (${new Date(Date.now()).toUTCString()}): ${method} - ${url}`
  );
};

const getErrorLog = (req) => {
  const { url } = req;
  console.warn(
    `ERROR (${new Date(Date.now()).toUTCString()}): requested url ${url} doesn't exist.`
  );
};

const getProcessLog = () => {
  console.log(
    `PROCESS (${new Date(Date.now()).toUTCString()}): logout has been initiliazed and the application will be closed.`
  );
};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
