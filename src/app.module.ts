import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
@Module({
	controllers: [],
	providers: [],
	imports: [
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: 'postgres',
			password: '4817',
			database: process.env.POSTGRES_DB,
			models: [],
			autoLoadModels: true,
		}),
		UsersModule,
	],
})
export class AppModule {}
