const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts'],
  {
    eager: true,
  },
)

const routes = [] as any[]

Object.keys(modules).forEach((key) => {
  routes.push(...modules[key].default)
})

export {
  routes,
}
