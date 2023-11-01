import type { FormInstance } from 'element-plus'
import { StorageSerializers } from '@vueuse/core'
import { fetchLogin } from '@/api/auth'
import { removeToken, setToken } from '@/utils/auth'
import router from '@/router'
import { getUsers } from '@/api/user'

interface LoginForm {
  username: string
  password: string
}

// 用户信息
const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object,
})

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

  const getUserInfo = async () => {
    try {
      const res = await getUsers()
      if (res.code === 200) {
        user.value = res.data
        return Promise.resolve(res.data)
      }
      else {
        return Promise.reject(res)
      }
    }
    catch (e) {
      return Promise.reject(e)
    }
  }

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

      if (res.code === 200) {
        setToken(res.data.token)
        await getUserInfo()
        await router.push('/')
        message('登录成功', { type: 'success' })
      }
    }
    catch (e) {
      return e
    }
  }

  // 退出登录
  const logout = async () => {
    user.value = null
    removeToken()
    await router.push('/login')
  }

  return {
    loginRef,
    loginForm,
    loginRules,
    login,
    logout,
    getUserInfo,
    user,
  }
}
