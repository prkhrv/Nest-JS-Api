import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema} from './user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema: UserSchema}])],
  controllers:[UsersController],
  providers: [UsersService]
})
export class UsersModule {}
