# empty module declarations and bootstrap application

app.module.ts
```TS
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

```

main.ts
```TS
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { AppModule } from './lect-66/app/app.module'


platformBrowserDynamic().bootstrapModule(AppModule)
```

## how to include standalone components and modules
```TS

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}
```