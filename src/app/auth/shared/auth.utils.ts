import { Router } from '@angular/router';
import { UserType } from '../../core/auth/enum/UserType.enum';
import { AuthService } from '../../core/auth/services/auth.service';

export function navigateTo( token: string, router: Router){
    
    AuthService.storeToken(token);
    const tokenData = AuthService.decodeToken();
    
    if(tokenData.registered){
      tokenData.user_role == UserType.Owner ?
        router.navigate(['/pet-owner/home']) :
        router.navigate(['/veterinarian/home']);
    }else{
        tokenData.user_role == UserType.Owner ? 
        router.navigate(['/auth/pet-owner']) : 
        router.navigate(['/auth/veterinarian']);
    }

}

