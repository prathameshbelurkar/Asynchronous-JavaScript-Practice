const fs = require('fs');
const superagent = require('superagent');

///////////////
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file 😓');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write the file! 😓');
      resolve('success');
    });
  });
};

/*
// (uncomment it for practicing promises)
// USING PROMISES
///////////////
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('random dog image saved to file!');
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
// (uncomment it for practicing promises)
// USING ASYNC/AWAIT
///////////////
const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const dog = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};

getDocPic();
*/

/*
// (uncomment it for practicing promises)
// HANDLING MORE PROMISES AT A SAME TIME
const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    // (not awaiting this first returning promise)
    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    console.log(res.body.message);

    await writeFilePro('dog-img.txt', imgs.join('\n '));
    console.log('random dog image saved to file!');
  } catch (err) {
    console.log(err);
    throw err;
  }

  return '2: READY Dogs 🐶';
};


// IIFE
(async () => {
  try {
    console.log('1: Will get dog pics');
    const x = await getDocPic();
    console.log(x);
    console.log('3: Done getting dog pics');
  } catch (err) {
    console.log('ERROR 💥');
  }
})();
*/
