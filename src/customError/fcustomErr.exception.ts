import { HttpException, HttpStatus } from "@nestjs/common";
// BadRequestException 坏请求
// UnauthorizedException 未经授权
// NotFoundException 找不到
// ForbiddenException 被禁止的
// NotAcceptableException 不可接受
// RequestTimeoutException 请求超时
// ConflictException 冲突
// GoneException 
// PayloadTooLargeException 超负荷
// UnsupportedMediaTypeException 未支持的媒体类型
// UnprocessableException 无法加工
// InternalServerErrorException 内部服务器错误
// NotImplementedException 未实施
// BadGatewayException 坏网关
// ServiceUnavailableException 服务不可用
// GatewayTimeoutException 网关超时
export class FcustomErr extends HttpException {
    constructor() {
        super('自定义异常', 3);
    }
}
