import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StaysComponent } from './pages/stays/stays.component';
import { ServicesComponent } from './pages/services/services.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { NurturingComponent } from './pages/nurturing/nurturing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stays', component: StaysComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'stories', component: StoriesComponent },
    { path: 'nurturing', component: NurturingComponent },
];
