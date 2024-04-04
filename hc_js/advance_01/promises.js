//promise creation:
const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //ex. DB calls, network, cryptography

  setTimeout(() => {
    //console.log("Async task is completed");
    resolve(); //this connects promise with .then
  }, 1000);
});

//promise consumption
promiseOne.then(() => {
  //console.log("Promise is consumed"); //this will never execute first
});

//type 2:
new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("Async task is completed");
    resolve();
  }, 1000);
}).then(() => {
  //console.log("completed");
});

//type 3:
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "agrim", email: "agrim@gmail.com", DOB: "08/01/2005" });
  }, 1000);
});

promiseThree.then((user) => {
  //console.log(user);
});

//type 4:
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "agrim",
        email: "agrim@gmail.com",
        DOB: "08/01/2005",
      });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    //console.log(user);
    return user.username;
  })
  .then((username) => {
    //console.log(username);
  })
  .catch((error) => {
    //console.log(error);
  })
  .finally(() => {
    //console.log("The promoise is either resolved or rejected");
  });

//type 5:
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "0805" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respnse = await promiseFive;
    console.log(respnse);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//type 6:
// async function gettingUserData() {
//   try {
//     const respnse = await fetch("https://api.github.com/users/agrim08");
//     const data = await respnse.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// gettingUserData();

//type 7:
fetch("https://api.github.com/users/agrim08")
  .then((respnse) => {
    return respnse.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
