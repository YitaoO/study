/**
 * 工具类方法
 */
import { Loading, Notify } from "element-ui";
class Utils {
  // 判断值是否为空
  isNull(value) {
    if (value === "" || value === null || value === undefined) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Utils();
