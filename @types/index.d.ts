/**
 * 用来定义数据格式的声明文件（通用）
 */
interface Result<T> {
  ret?: number;
  code?: number;
  data: T;
  message?: string;
  msg?: string;
}

// 无为axios通用返回类型
interface WuweiType<T> {
  data: {
    data: {
      [key: string]: {
        data: T[];
      };
    };
  };
}

// 客户端代发请求响应类型
interface ClientResponse<T> {
  ret: number;
  errmsg: string;
  data: T;
}

/** 定义新类型用来替代any，解决eslint警告 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dynamic = any;

type Func = (...obj: Dynamic) => Dynamic;
type Nullable<T> = T | null | undefined;
