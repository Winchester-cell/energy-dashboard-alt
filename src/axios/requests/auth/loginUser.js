import apiProxy from "@/axios/instacne/proxy"

const loginUser = async (user) => {
  try {
    const res = await apiProxy.post('/auth/login', user)

    if (res.status === 201) {
      return { result: 'ورود موفق', isOk: true }
    }

  } catch (err) {
    if (err.response && err.response.status === 422) {
      return { result: `نام کاربری یا رمز عبور اشتباه است`, isOk: false }
    }

    return { result: 'خطای ناشناخته', isOk: false }
  }
}

export default loginUser
