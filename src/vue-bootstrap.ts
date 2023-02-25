import type { App } from 'vue'
import PrimeVue from "primevue/config"

import PrimeButton from "primevue/button";

const components = {
        Button: PrimeButton
}

export default (app:App) => {


        app.use(PrimeVue)


        Object.entries(components).forEach(([key, value]) =>app.component(key,value))



}