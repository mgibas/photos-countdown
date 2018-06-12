import style from './counter.scss'

(function(){
  class Counter {
    constructor(el) {
      this.root = el
      this.root.classList.add(style.counter)
      this.render() 
    }  
    render () {
      console.log(style)
      let template = ` 
        <div>
        hello
        </div>
        `
      this.root.innerHTML = template
    }
  }

  document.querySelectorAll('counter').forEach((el)=> new Counter(el))
//window.customElements.define('poc-component', PocComponent)
}())
