import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor() // private jwtService: JwtService, // private usersService: UsersService,
  // @InjectRepository(User) private userRepository: Repository<User>,
  {}

  // async signIn(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user?.password !== pass) {
  //     // TODO: Create a new user
  //   }
  //   const { password, ...result } = user;

  //   const payload = { sub: user.userId, username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // generateJwt(payload) {
  //   return this.jwtService.sign(payload);
  // }

  // async signIn(user) {
  //   if (!user) {
  //     throw new BadRequestException('Unauthenticated');
  //   }

  //   const userExists = await this.findUserByEmail(user.email);

  //   if (!userExists) {
  //     return this.registerUser(user);
  //   }

  //   return this.generateJwt({
  //     sub: userExists.id,
  //     email: userExists.email,
  //   });
  // }

  // async registerUser(user: RegisterUserDto) {
  //   try {
  //     const newUser = this.userRepository.create(user);
  //     newUser.username = generateFromEmail(user.email, 5);

  //     await this.userRepository.save(newUser);

  //     return this.generateJwt({
  //       sub: newUser.id,
  //       email: newUser.email,
  //     });
  //   } catch {
  //     throw new InternalServerErrorException();
  //   }
  // }

  // async findUserByEmail(email) {
  //   const user = await this.userRepository.findOne({ email });

  //   if (!user) {
  //     return null;
  //   }

  //   return user;
  // }
}
