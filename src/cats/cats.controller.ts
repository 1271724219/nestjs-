import { Body, Controller, ForbiddenException, Get, Header, Headers, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { FcustomErr } from 'src/customError/fcustomErr.exception';
import { CreateCatDto } from './create-cat.dto';


@Controller('cats')
@ApiTags('cats')
export class CatsController {
    @Get('/err')
    getError(): string {
        return 'error';
    }
    @Get('/aaa')
    getHello(@Headers() params): string {
        return '123213213';
    }

    @Get('/bbb')
    getBbb(@Param() params: CreateCatDto): string {
        return '222222';
    }
    @Post('/ccc')
    getCcc(@Body() JSONData: CreateCatDto): string {
        return '123213213';
    }

    @Get('/customerr')
    async customErr() {
        return new ForbiddenException('123', '错了');
    }
    @Get('/error')
    async findAll(@Param() params) {
        try {
            if (params.num.a) {
                return '123456'
            }
        } catch (error) {
            console.log(error);
            return new HttpException(
                {
                    // response: { a: 244 },
                    // status: HttpStatus.FORBIDDEN,
                    // error: error.toString(),
                    // message: '错啦！！'
                }, HttpStatus.FORBIDDEN);
        }
    }

    @Get('/error/fcustom')
    async fcustom(@Param() params) {
        return new FcustomErr();
    }

    // @Get('/error/exceptionFilter')
    // async exceptionFilter(@Param() params) {
    //     return new HttpExceptionFilter();
    // }
}
