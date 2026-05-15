let db;

const reqdb = indexedDB.open('test', 2);

reqdb.addEventListener('error',(e) =>{
  console.error(e);
});

reqdb.addEventListener('upgradeneeded',(e) =>{
  const testdb = e.target.result;
  if(!testdb.objectStoreNames.contains('test1')){
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
      store.add({id: 2, name: "king2", age: 32, hobbies: ["read book", "love"]});
      request.addEventListener('success', e => {
        console.log('add test1 success', e);
      })
}

const get = document.getElementById('get');
get.addEventListener('click', getTest);

function getTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const store = transaction.objectStore('test1');
  const request = store.get(2);
   request.addEventListener('success', e => {
    const result = e.target.result
        console.log('get test1 success', result);
  });
  request.addEventListener('error', e => {
    console.log('get test1 error', e);
  });
}

const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', updateTest);

function updateTest(){
  const transaction = db.transaction(["test1"], 'readwrite');
  const store = transaction.objectStore('test1');
  const request = store.put({id: 1, name: "Dreamer", age: 20});
   request.addEventListener('success', e => {
    const result = e.target.result
        console.log('get test1 success', result);
      });
}

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', deleteTest);

function deleteTest(){
  const transaction = db.transaction(["test1"], 'readwrite');
  const store = transaction.objectStore('test1');
  const request = store.delete(1);
  request.addEventListener('success', e => {
    console.log('get test1 success', e);
  });
}

const getAllBtn = document.getElementById('getAll');
getAllBtn.addEventListener('click', getAllTest);

function getAllTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const store = transaction.objectStore('test1');
  const cursor = store.openCursor()

  cursor.addEventListener('success', e => {
    const result = e.target.result;
    if(result){
      console.log('get test1 success', result.value);
      result.continue();
    }
  });

  transaction.addEventListener('complete', (e) => {
    console.log('complete',e);
  })
}

const rangeBtn = document.getElementById('range');
rangeBtn.addEventListener('click', getRangeTest);

function getRangeTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const range = IDBKeyRange.bound(2, 3);
  // IDBKeyRange.upperBound(33); // 后一个参数指定区间开闭
  // IDBKeyRange.lowerBound(33);
  const store = transaction.objectStore('test1');
  const index = store.index('id');
  const cursor = index.openCursor(range);

  cursor.addEventListener('success', e => {
    const result = e.target.result;
    if(result){
      console.log('getRangeTest', result.value);
      result.continue();
    }
  });

  transaction.addEventListener('complete', (e) => {
    console.log('complete');
  })
}

const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', searchTest);

function searchTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const range = IDBKeyRange.only("love");
  // IDBKeyRange.upperBound(33); // 后一个参数指定区间开闭
  // IDBKeyRange.lowerBound(33);
  const store = transaction.objectStore('test1');
  const index = store.index('hobbies');
  const cursor = index.openCursor(range)
  cursor.addEventListener('success', e => {
    const result = e.target.result;
    if(result){
      console.log('getRangeTest', result);
      result.continue();
    }
  });
  transaction.addEventListener('complete', (e) => {
    console.log('complete');
  })
}

const countBtn = document.getElementById('count');
countBtn.addEventListener('click', countTest);

function countTest(){
  const transaction = db.transaction(["test1"], 'readonly');
  const store = transaction.objectStore('test1');
  const cursor = store.count();

  cursor.addEventListener('success', e => {
    const result = e.target.result;
    console.log('countTest', result);
  });
  transaction.addEventListener('complete', (e) => {
    console.log('complete');
  });
}
