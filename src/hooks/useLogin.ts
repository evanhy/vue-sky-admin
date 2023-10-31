import type { FormInstance } from 'element-plus'
import { fetchLogin } from '@/api/auth'
import { removeToken, setToken } from '@/utils/auth'
import router from '@/router'

interface LoginForm {
  username: string
  password: string
}

export const useLogin = () => {
  const loginRef = ref(null as unknown as FormInstance)
  //   表单项
  const loginForm = ref<LoginForm>({
    username: 'admin',
    password: '123456',
  })
  //  表单校验规则
  const loginRules = ref({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  })

  const login = async (values: LoginForm) => {
    try {
      if (!loginRef.value)
        return
      await loginRef.value.validate()
      if (values.username !== 'admin' || values.password !== '123456') {
        ElMessage.error('用户名或密码错误')
        return
      }
      const res = await fetchLogin(values)
      setToken(res.data.token)
      await router.push('/')
    }
    catch (e) {
      return e
    }
  }
  // 退出登录
  const logout = async () => {
    removeToken()
    await router.push('/login')
  }

  return {
    loginRef,
    loginForm,
    loginRules,
    login,
    logout,
  }
}
