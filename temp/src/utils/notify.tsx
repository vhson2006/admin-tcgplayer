import { toast } from 'react-toastify';
const result = {
  success: (message: any) => toast.success(message),
  error: (message: any) => toast.error(message),
  warning: (message: any) => toast.warning(message),
}
export default result