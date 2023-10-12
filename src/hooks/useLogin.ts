import type { FormInstance } from 'element-plus'

export const useLogin = () => {
  interface LoginForm {
    username: string
    password: string
  }
  // 111
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

  const router = useRouter()
  const login = async (values: LoginForm) => {
    try {
      if (!loginRef.value)
        return
      await loginRef.value.validate()
      if (values.username !== 'admin' || values.password !== '123456') {
        ElMessage.error('用户名或密码错误')
        return
      }
      await router.push('/')
    }
    catch (e) {
      return e
    }
  }

  return {
    loginRef,
    loginForm,
    loginRules,
    login,
  }
}
