import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { expect } from 'chai'

describe('HelloWorld.vue', () => {

  it('should has the correct text',()=>{
    expect(HelloWorld.data().demo)
      .to.equal('Kiara peluche')
  })



  it('should render correct contents', () => {

    // Trae el componente HelloWorld
    const Constructor = Vue.extend(HelloWorld)
    
    // Monta el componente, como si la pagina lo estuviera viendo yo
    const vm = new Constructor().$mount()
    
    // Coje la clase hello, dentro de hello "(coje el PRIMER)" h1 que encuentre que tenga el 
    // texto Welcome to Your Vue.js App
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
