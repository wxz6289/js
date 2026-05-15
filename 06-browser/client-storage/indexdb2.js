let db;

const reqdb = indexedDB.open('test', 2);

reqdb.addEventListener('error',(e) =>{
  console.error(e);
});

reqdb.addEventListener('upgradeneeded',(e) =>{
  const testdb = e.target.result;
  console.log(testdb.objectStoreNames, 'upgradeneeded');

  if (!testdb.objectStoreNames.contains('test1')) {
    const test1 = testdb.createObjectStore('test1',{keyPath: 'id', autoIncrement: true});
    test1.createIndex('id', 'id', { unique: true });
    test1.createIndex('hobbies', 'hobbies', { unique: false, multiEntry: true });
  }
});

reqdb.addEventListener('success',(e) =>{
  db = e.target.result;
  console.log('success', e.target.result.objectStoreNames);
});

const add = document.getElementById('add');
add.addEventListener('click', addTest);

function addTest(){
console.log('add');
const transaction = db.transaction(["test1"], 'readwrite');
const store = transaction.objectStore('test1');
const request = store.add({id: 1, name: "king", age: 30});
store.add({id: 3, name: "zpp", age: 32, hobbies: ["read book", "love"]});
request.addEventListener('success', e => {
 console.log('add test1 success', e);
})
}

const get = document.getElementById('get');
get.addEventListener('click', getTest);

function getTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const store = transaction.objectStore('test1');
  const request = store.get(3);
   request.addEventListener('success', e => {
    const result = e.target.result
        console.log('get test1 success', result);
  });
  request.addEventListener('error', e => {
    console.log('get test1 error', e);
  });
}

const getDb = document.querySelector("#getDb");

getDb.addEventListener('click', async () => {
  const dbs = await indexedDB.databases();
  console.log(dbs, 'dbs');
});

const deleteDb = document.querySelector('#deleteDb');
deleteDb.addEventListener('click', () => {
   indexedDB.deleteDatabase('test');
})