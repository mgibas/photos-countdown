import style from './counter.scss'

(function(){
  class Counter {
    constructor(el) {
      this.root = el
      this.root.classList.add(style.counter)
      this.render(this._getDaysLeft()) 
    }  
    render (left) {
      let template = ` 
        <div class="${style.display} ${style.display1}" digit="${left[0]}">
          ${ Array(28).join(0).split(0).map((item, i) => `
            <div class="counter-cell ${style.cell} ${style['cell' + i]}" style="transform: rotate(${this._randomRotation()}deg);">
            </div>
          `).join('')}  
        </div>
        <div class="${style.display} ${style.display2}" digit="${left[1]}">
          ${ Array(28).join(0).split(0).map((item, i) => `
            <div class="counter-cell ${style.cell} ${style['cell' + i]}" style="transform: rotate(${this._randomRotation()}deg);">
            </div>
          `).join('')}  
        </div>
        `
      this.root.innerHTML = template
    }
    _randomRotation() {
      let rotation = Math.floor(Math.random() * 10) + 1 
      rotation *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      return rotation 
    }
    _getDaysLeft() {
      var oneDay = 24*60*60*1000;
      var secondDate = new Date(new Date().getFullYear(),6,1);
      var firstDate = new Date();
      let left = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      left = left.toString().length > 1 ? left.toString() : ' ' + left.toString() 
      return left
    }
  }

  document.querySelectorAll('counter').forEach((el)=> new Counter(el))
}())
