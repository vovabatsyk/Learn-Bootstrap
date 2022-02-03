import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
	@ApiProperty({ example: 'admin' })
	readonly value: string;

	@ApiProperty({ example: 'Administrator' })
	readonly description: string;
}
