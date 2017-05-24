# vuex-action-logger

debugging tool to print out actions with parameters as they're called from Vuex.

## Set-up

### installation
```bash
npm install vuex-action-logger --save-dev
```

```javascript
//app.js
import Vuex from 'vuex';
import VuexActionLogger from 'vuex-action-logger';


Vue.use(Vuex);
Vue.use(VuexActionLogger(Vuex));
```
