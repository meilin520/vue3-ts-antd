import { Hook, VueComponent } from "vue3-oop";

class App extends VueComponent {
  private num: number = 1;
  @Hook('Mounted')
  onMounted(){
    console.log('挂载')
  }
  render(): any {
    return (
      <input onClick={()=>{alert(2323)}} v-model={this.num} >hello world</input>
    )
  }
}

export default App;