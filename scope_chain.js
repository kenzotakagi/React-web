const measureTask = (taskFn) => {
  const startTime = Date.now();
  taskFn();
  const endTime = Date.now();
  console.log(`実行時間は${endTime - startTime}ミリ秒`)
};

function doHeavyTask() {
}

measureTask(doHeavyTask);


const createCounter = () => {
  let privateCount = 0;
  return () => {
    privateCount++;
    return console.log(`${privateCount}回目`);
  };
};
const counter = createCounter();
counter();
counter();
