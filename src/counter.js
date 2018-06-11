import style from './counter.scss'

(function(){
  class Counter {
    constructor(el) {
      this.root = el
      this.render() 
    }  
    render () {
      let template = ` 
        <style>${style.toString()}</style>
        <div>
          <p class="${style.locals.text}">Im Scoped Vanilla</p>
          <p class="${style.locals.text}" part="text">Im Overridable Vanilla</p>
        </div>
        <div class="${style.locals.parent}">
          <div class="${style.locals.child}" part="child">make me blue</div>
        </div>
        `
      this.root.innerHTML = template
    }
  }
  
//window.customElements.define('poc-component', PocComponent)
}())
