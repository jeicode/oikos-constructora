import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     console.log('LCP candidate:', entry.startTime, entry);
//   }
// }).observe({ type: 'largest-contentful-paint', buffered: true });