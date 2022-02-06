import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../users/users.model'
import { Role } from '../roles/roles.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({
    example: '1',
    description: 'Primary key',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({
    example: '1',
    description: 'Role Id',
  })
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  idRole: number

  @ApiProperty({
    example: '1',
    description: 'User Id',
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  idUser: number
}
