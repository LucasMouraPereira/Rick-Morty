export const generateBreadcrumbItems = (pathname: string) => {
  const items = [{ href: '/', label: 'Home' }]

  if (pathname === '/') {
    return items
  }

  const paths = pathname.split('/').filter(Boolean)
  let path = ''

  paths.forEach((p) => {
    path += `/${p}`
    items.push({ href: path, label: p })
  })

  return items
}
