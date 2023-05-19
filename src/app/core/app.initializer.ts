import { AuthService } from "./services/authentication/auth.service";


export function appInitializer(authService: AuthService) {
    return () => new Promise(resolve => {
        authService.refreshToken()
            .subscribe()
            resolve(console.log("start the application!"));
    });
}