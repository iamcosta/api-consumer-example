import { AxiosError } from "axios";

type OnListActions<T> = {
    onSuccess?: (data: T[]) => any;
    onReject?: (error: AxiosError) => any;
    onFinally?: () => any;
}