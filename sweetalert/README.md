<p align="center">
  <a href="https://www.mobfox.com/">
    <img alt="SweetAlert For Mobfox" src="https://github.com/mobfox/control-panel-libs/blob/master/sweetalert/assets/Logo.png?raw=true" width="300">
  </a>
</p>

<p align="center">
  A beautiful replacement for JavaScript's "alert"
</p>

<p align="center">
  <img alt="A success modal" src="https://raw.githubusercontent.com/t4t5/sweetalert/e3c2085473a0eb5a6b022e43eb22e746380bb955/assets/swal.gif">
</p>


## Installation

* in **Control Panel React**

```bash
//package.json file
//under dependencies
....
"sweetalert": "https://github.com/mobfox/control-panel-libs/tarball/master"
...
```
and then,

```bash
npm install
```

* in **Control Panel**

- copy the minified script file under --> `https://github.com/mobfox/control-panel-libs/tree/master/sweetalert/dist`
- paste under `/www/cp/asset/javascripts` directory. 
- include in header template file (if not included already)

## Usage

**Control Panel React**

```javascript
import SweetAlert from 'sweetalert';
// and render SweetAlert
function renderSweetAlert() {
  if(this.state.isSweetAlertVisible) {
    <SweetAlert 
      ...SweetAlertProps
    />
  }
}
```

**Control Panel**
```javascript
var SweetAlertProps = {
  // here goes SweetAlert Props
};

// on demand show the dialog
SweetAlert.show(SweetAlertProps);
```

<a href="https://github.com/t4t5/sweetalert">ORIGINAL REPO - CLONE FROM</a>

