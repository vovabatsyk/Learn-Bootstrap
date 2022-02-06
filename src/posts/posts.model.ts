import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/users/users.model'

interface PostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
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
    description: 'Title',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string

  @ApiProperty({
    description: 'Content',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string

  @ApiProperty({
    description: 'Image',
  })
  @Column({
    type: DataType.STRING,
  })
  image: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number

  @BelongsTo(() => User)
  author: User
}
