class LoopMachine {
 constructor() {
  this.flag = false;
  this.callback = [];
 }
 addCallback(callback) {
  let index = this.callback.indexOf(callback);
  if (index > -1) return
  this.callback.push(callback);
 }
 removeCallback(callback) {
  let index = this.callback.indexOf(callback);
  if (index > -1) this.callback.splice(index, 1);
 }
 run = () => {
  if (!this.flag) return
  this.callback.forEach(cb => cb());
  window.requestAnimationFrame(this.run);
 }
 start = () => {
  if (this.flag) return
  this.flag = true;
  this.run();
 }
 stop = () => {
  this.flag = false;
 }
}

const loopMachine = new LoopMachine();

export default loopMachine;

export { loopMachine };