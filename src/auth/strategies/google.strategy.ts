import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from '../../credentials/credential.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(Credential)
    private credentialsRepository: Repository<Credential>,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    cb: VerifyCallback,
  ): Promise<any> {
    console.log('AT', accessToken);
    console.log('RT', refreshToken);
    console.log('profile', profile);

    const { id, name, emails } = profile;

    const credential = new Credential();
    credential.provider = 'google';
    credential.providerId = id;
    credential.accessToken = accessToken;
    // credential.refreshToken = refreshToken;
    this.credentialsRepository.save(credential);

    const user = {
      provider: 'google',
      providerId: id,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };

    cb(null, user);
  }
}
