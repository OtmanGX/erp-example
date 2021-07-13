import { Injectable } from '@angular/core';
import { GetMyUserGQL } from '@tanglass-erp/infrastructure/graphql';
import { AuthService } from '@auth0/auth0-angular';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private getMyUserGQL: GetMyUserGQL,
    private authService: AuthService
  ) {}

  getUser()  {
    return this.authService.isAuthenticated$.pipe(
      filter((state) => state),
      mergeMap( () =>
        this.authService.user$.pipe(
          mergeMap((user) =>
            this.getMyUserGQL
              .fetch({ id: user.sub })
              .pipe(map(value => value.data.management_userProfile_by_pk))
          )
        )
      )
    );
  }
}
