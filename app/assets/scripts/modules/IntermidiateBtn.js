class IntermidiateInput {
  constructor() {
    this.customInputJs = document.querySelector(".custom-input-js");
    this.makeIntermidiateInput();
  }

  makeIntermidiateInput() {
    this.customInputJs.indeterminate = true;
  }
}
// $('.your-checkbox').prop('indeterminate', true)
export default IntermidiateInput;
