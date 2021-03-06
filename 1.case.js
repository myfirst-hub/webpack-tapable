class SyncHook { //钩子是同步的
  constructor(args) { //args => ['name']
    this.tasks = [];
  }
  tab(name, task) {
    this.tasks.push(task);
  }
  call(...args) {
    this.tasks.forEach(task => {
      task(...args);
    });
  }
}

let hook = new SyncHook(['name']);
hook.tab('react', function (name) {
  console.log('react..........', name);
});
hook.tab('node', function (name) {
  console.log('node..........', name);
});
hook.call('sun');