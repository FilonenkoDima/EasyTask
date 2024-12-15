import { ResolveFn, Routes } from '@angular/router';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';

import { inject } from '@angular/core';

const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'desc') {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return tasks.length ? tasks : [];
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <domain>/users/<uid>/tasks
    loadComponent: () =>
      import('../tasks/tasks.component').then((mod) => mod.TasksComponent),
    runGuardsAndResolvers: 'always',
    resolve: { userTasks: resolveUserTasks },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
