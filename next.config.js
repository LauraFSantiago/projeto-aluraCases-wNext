module.exports = {
  output: 'export',  // com essa config ele ja faz o export direto no build automaticamente, so rodar o yarn build
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
}