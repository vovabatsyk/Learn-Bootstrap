import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {

	constructor(private userService: UsersService,
							private jwtService: JwtService) {
	}


	async login(dto: CreateUserDto) {
	}

	async registration(dto: CreateUserDto) {
		const candidate = await this.userService.getUserByEmail(dto.email);
		if (candidate) throw new HttpException('User with this email already exist!', HttpStatus.BAD_REQUEST);
		const hashPassword = await bcrypt.hash(dto.password, 5);
		const user = await this.userService.createUser({ ...dto, password: hashPassword });
		return this.generateToken(user);
	}

	private generateToken(user: User) {
		const payload = { email: user.email, id: user.id, roles: user.roles };
		return {
			token: this.jwtService.sign(payload),
		};
	}
}
