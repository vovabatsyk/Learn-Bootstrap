import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
	email: string,
	password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({
		example: '1', description: 'Primary key',
	})
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		example: 'user@gmail.com', description: 'Email',
	})
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	email: string;

	@ApiProperty({
		example: '123456', description: 'Password',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string;

	@ApiProperty({
		example: 'true', description: 'Banned?',
	})
	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false,
	})
	banned: boolean;

	@ApiProperty({
		example: 'Via spam', description: 'Еhe reason for the ban',
	})
	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	banReason: string;
}
